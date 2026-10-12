import { useRef, useState } from "react";

const useVideo = () => {
  //   const ref = useRef(null);
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(true);

  //   const play = () => setIsPlaying(true);
  //   const pause = () => setIsPlaying(false);

  const handleToggle = async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    } catch (error) {
      console.error("Video playback failed:", error);
    }
  };

  const handleOpen = () => {
    setIsVideoOpen(true);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsPlaying(false);
    setIsVideoOpen(false);
  };

  return {
    videoRef,
    isPlaying,
    setIsPlaying,
    isVideoOpen,
    handleToggle,
    handleOpen,
    handleClose,
  };
};

export default useVideo;
