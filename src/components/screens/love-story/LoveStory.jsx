import ShadePink from "@/components/ui/backgrounds/ShadePink";

import TitleLoveStory from "./TitleLoveStory";
import StoryTimeline from "./StoryTimeline";
import NewChapter from "./new-chapter/NewChapter";

const LoveStory = ({ texts }) => {
  return (
    <>
      <section id="photos" className="py-16 px-4 relative overflow-hidden">
        <ShadePink opacityNum="5" />

        <div className="max-w-4xl mx-auto relative z-10">
          <TitleLoveStory texts={texts} />
          <StoryTimeline texts={texts} />
          <NewChapter texts={texts} />
        </div>
      </section>
    </>
  );
};

export default LoveStory;
