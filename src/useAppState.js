// src/useAppState.js

import useLanguage from "./hooks/useLanguage";
import useTheme from "./hooks/useTheme";
import useModal from "./hooks/useModal";
import useResize from "./hooks/useResize";
import useScroll from "./hooks/useScroll.js";
import useSound from "./hooks/useSound";
// import useVideo from "./hooks/useVideo";

const useAppState = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // useModal
  // const { isOpen, open, close, toggle } = useModal();

  const { isOpen: isLanguageModalOpen, close: closeLanguageModal } =
    useModal(true);

  const {
    isOpen: isLangModalOpen,
    open: openLangModal,
    close: closeLangModal,
    toggle: toggleLangModal,
  } = useModal(false, true);

  const { isOpen: isOpenInvite, open: openInvite } = useModal();

  const {
    isOpen: addCalendar,
    open: openAddCalendar,
    close: closeAddCalendar,
    toggle: toggleAddCalendar,
  } = useModal(false, true);

  const isMobile = useResize();
  const { scroll, upButton, toBlock } = useScroll();

  const { playSong, togglePlaySong, isPlaying } = useSound();

  return {
    language,
    setLanguage,
    theme,
    toggleTheme,

    isLanguageModalOpen,
    closeLanguageModal,

    isLangModalOpen,
    openLangModal,
    closeLangModal,
    toggleLangModal,

    isOpenInvite,
    openInvite,

    addCalendar,
    openAddCalendar,
    closeAddCalendar,
    toggleAddCalendar,

    isMobile,

    scroll,
    upButton,
    toBlock,

    playSong,
    togglePlaySong,
    isPlaying,
  };
};

export default useAppState;
