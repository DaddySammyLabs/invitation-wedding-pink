import React, { useState, useEffect } from "react";
import { memories } from "@/components/screens/love-story/new-chapter/db.photos";
import { useEscapeKey } from "./common/useEscapeKey";
import { useBodyScrollLock } from "./common/useBodyScrollLock";

const usePhotos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Закрытие фотографии клавишей Escape
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Блокируем прокрутку страницы при открытом фото
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);
  return {
    memories,

    selectedImage,
    setSelectedImage,

    closeModal,
  };
};

export default usePhotos;
