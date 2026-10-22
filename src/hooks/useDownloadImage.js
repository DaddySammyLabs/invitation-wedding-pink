import { useCallback } from "react";
import { toBlob } from "html-to-image";
// import { toPng } from "html-to-image"; //for download -> npm install html-to-image
// ???????
const useDownloadImage = ({
  filename = "invitation-card.png",
  pixelRatio = 2,
  backgroundColor = "#ffffff",
} = {}) => {
  const handleDownload = useCallback(
    async (element) => {
      if (!element) {
        console.error("Элемент для скачивания не найден");
        return;
      }

      try {
        // Ждём загрузки шрифтов.
        await document.fonts.ready;

        // Ждём загрузки изображений внутри элемента.
        const images = Array.from(element.querySelectorAll("img"));

        await Promise.all(
          images.map((img) => {
            if (img.complete) {
              return Promise.resolve();
            }

            return new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            });
          }),
        );

        const rect = element.getBoundingClientRect();
        const width = Math.round(rect.width);
        const height = Math.round(rect.height);

        const blob = await toBlob(element, {
          cacheBust: true,
          pixelRatio,
          width,
          height,
          backgroundColor,
          style: {
            width: `${width}px`,
            height: `${height}px`,
            margin: "0",
            transform: "none",
          },
        });

        if (!blob || blob.size === 0) {
          throw new Error("PNG пустой или не был создан");
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = filename;
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();
        link.remove();

        // Освобождаем созданный URL.
        setTimeout(() => URL.revokeObjectURL(url), 10000);
      } catch (error) {
        console.error("Не удалось скачать изображение:", error);
        alert("Не удалось создать изображение. Проверьте консоль браузера.");
      }
    },
    [filename, pixelRatio, backgroundColor],
  );

  return { handleDownload };
};

export default useDownloadImage;
