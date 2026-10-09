import React, { useRef } from "react";
import { toPng } from "html-to-image"; //for download -> npm install html-to-image

import styles from "./Hero.module.css";

import InvitationCard from "./InvitationCard";
import DownloadButton from "@/components/ui/buttons/DownloadButton";
import SinceWedding from "./SinceWedding";

const Hero = ({ texts }) => {
  const invitationRef = useRef(null);

  const handleDownload = async () => {
    const element = invitationRef.current;

    if (!element) return;

    try {
      await document.fonts.ready;

      const rect = element.getBoundingClientRect();

      const dataUrl = await toPng(element, {
        cacheBust: true,

        width: Math.round(rect.width),
        height: Math.round(rect.height),

        pixelRatio: 2,

        style: {
          width: `${Math.round(rect.width)}px`,
          height: `${Math.round(rect.height)}px`,
          margin: "0",
          transform: "none",
        },
      });

      const link = document.createElement("a");
      link.download = "invitation-card.png";
      link.href = dataUrl;

      document.body.appendChild(link);
      link.click();
      link.remove();
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
            {texts.save_date}
          </span>
        </div>
        <div className="space-y-6 w-full">
          <p
            className="text-gray-500 font-light italic text-base sm:text-lg"
            style={{ opacity: 1 }}
          >
            {texts.invite_text}
          </p>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600"
            style={{ opacity: 1, transform: "none" }}
          >
            {texts.husband_name} <span className={`${styles.and}`}>&amp;</span>{" "}
            {texts.wife_name}
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
