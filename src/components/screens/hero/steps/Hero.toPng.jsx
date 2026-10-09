import React, { useRef } from "react";
import { toPng } from "html-to-image"; //for download -> npm install html-to-image

import InvitationCard from "../InvitationCard";
import InvitationCard1st from "./InvitationCard.Original";
import DownloadButton from "@/components/ui/buttons/DownloadButton";
import SinceWedding from "../SinceWedding";

const Hero = ({ texts }) => {
  const invitationRef = useRef(null);

  // const handleDownload = async () => {
  //   if (!invitationRef.current) return;

  //   try {
  //     const dataUrl = await toPng(invitationRef.current, {
  //       cacheBust: true,
  //       pixelRatio: 2,
  //     });

  //     const link = document.createElement("a");
  //     link.download = "invitation-card.png";
  //     link.href = dataUrl;
  //     link.click();
  //   } catch (error) {
  //     console.error("Не удалось скачать открытку:", error);
  //   }
  // };

  const handleDownload = async () => {
    const element = invitationRef.current;

    if (!element) return;

    try {
      // Ждём, пока браузер полностью загрузит картинки
      await document.fonts.ready;

      const images = element.querySelectorAll("img");

      await Promise.all(
        Array.from(images).map((img) => {
          if (img.complete) return Promise.resolve();

          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        }),
      );

      const width = element.scrollWidth;
      const height = element.scrollHeight;

      const dataUrl = await toPng(element, {
        cacheBust: true,

        // ВАЖНО: явно задаём размеры
        width,
        height,

        pixelRatio: 2,

        style: {
          width: `${width}px`,
          height: `${height}px`,
        },
      });

      const link = document.createElement("a");

      link.download = "invitation-card.png";
      link.href = dataUrl;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Не удалось скачать открытку:", error);
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
