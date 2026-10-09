//   src//hooks/useModal.js + Esc

import { useEffect, useState } from "react";

export function useModal(initialValue = false, closeOnEscape = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  // Cам решаешь, какое окно реагирует на Esc:
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOnEscape]);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}

export default useModal;

// И тогда ты сам решаешь, какое окно реагирует на Esc:
// const {
//   isOpen: isLangModalOpen,
//   open: openLangModal,
//   close: closeLangModal,
// } = useModal(false, true);

// const {
//   isOpen: addCalendar,
//   open: openAddCalendar,
//   close: closeAddCalendar,
// } = useModal(false, false);
