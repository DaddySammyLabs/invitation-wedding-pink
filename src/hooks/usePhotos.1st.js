import React, { useState, useEffect } from "react";
import { memories } from "@/components/screens/love-story/new-chapter/db.photos";
// visiblePhotos,
// showAll,
// handleTogglePhotos,
const usePhotos = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedImage, setSelectedImage] = useState(null);

  const visiblePhotos = memories.slice(0, visibleCount);
  const showAll = visibleCount >= memories.length;

  const handleTogglePhotos = () => {
    if (showAll) {
      setVisibleCount(4);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, memories.length));
    }
  };

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

    visibleCount,
    setVisibleCount,
    selectedImage,
    setSelectedImage,

    visiblePhotos,
    showAll,
    handleTogglePhotos,
    closeModal,
  };
};

export default usePhotos;
