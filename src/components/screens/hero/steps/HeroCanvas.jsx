import React, { useRef } from "react";
import html2canvas from "html2canvas";
//for download -> npm install html2canvas

import InvitationCard from "../InvitationCard";
import InvitationCard1st from "./InvitationCard.Original";
import DownloadButton from "@/components/ui/buttons/DownloadButton";
import SinceWedding from "../SinceWedding";

const Hero = ({ texts }) => {
  const invitationRef = useRef(null);

  const handleDownload = async () => {
    const element = invitationRef.current;

    if (!element) {
      console.error("InvitationCard не найден");
      return;
    }

    try {
      await document.fonts.ready;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: true,
      });

      canvas.toBlob((blob) => {
        if (!blob) {
          console.error("Не удалось создать Blob");
          return;
        }

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "invitation-card.png";

        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(() => {
          URL.revokeObjectURL(url);
        }, 100);
      }, "image/png");
    } catch (error) {
      console.error("Ошибка html2canvas:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 pt-16 sm:pt-20 w-full text-center relative overflow-hidden">
      <div
        className="space-y-10 relative z-10 w-full"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="inline-block mx-auto" style={{ transform: "none" }}>
          <span className="px-4 py-1 text-sm bg-rose-50 text-rose-600 rounded-full border border-rose-200">
            Запомните дату
          </span>
        </div>
        <div className="space-y-6 w-full">
          <p
            className="text-gray-500 font-light italic text-base sm:text-lg"
            style={{ opacity: 1 }}
          >
            С радостью и благословением приглашаем вас на нашу свадьбу
          </p>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600"
            style={{ opacity: 1, transform: "none" }}
          >
            Muhammad &amp; Saodat
          </h2>
        </div>
        <InvitationCard texts={texts} ref={invitationRef} />
        <DownloadButton texts={texts} handleDownload={handleDownload} />
        <SinceWedding texts={texts} />
      </div>
    </div>
  );
};

export default Hero;
