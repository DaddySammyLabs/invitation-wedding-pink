import React, { useState, useEffect, useRef } from "react";

const useSound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/pornhub-intro-sound.mp3");
    }

    audioRef.current.play();
  };

  const togglePlaySong = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/pornhub-intro-sound.mp3");
    }

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  //   useEffect(() => {
  //     playSong();
  //   }, []);
  return { playSong, togglePlaySong };
};

export default useSound;
