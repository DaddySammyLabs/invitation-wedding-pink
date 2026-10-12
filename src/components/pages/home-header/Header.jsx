import React, { useRef } from "react";
import { useApp } from "@/context/AppContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import ChooseLang from "@/components/screens/choose-lang/ChooseLang";

import HeaderButton from "@/components/ui/buttons/HeaderButton";
import LangModal from "@/components/ui/modal/modal-menu/lang-madal/LangModal";

const Header = ({ texts }) => {
  const {
    isLangModalOpen,
    toggleLangModal,
    playSong,
    togglePlaySong,
    isPlaying,
  } = useApp();

  const [parent] = useAutoAnimate();

  return (
    <>
      <ChooseLang texts={texts} />

      <div ref={parent} className="fixed top-4 left-4 z-40">
        <div className="relative">
          <HeaderButton
            ariaLabel="Change language"
            image="globe.svg"
            place=""
            alter="globe"
            onClick={toggleLangModal}
          />

          {isLangModalOpen && <LangModal texts={texts} />}
        </div>
      </div>
      <HeaderButton
        ariaLabel={isPlaying ? "Pause song" : "Play song"}
        image={isPlaying ? "pause-circle.svg" : "circle-play.svg"}
        place={"right-4"}
        alter={"song"}
        onClick={togglePlaySong}
      />
    </>
  );
};

export default Header;
