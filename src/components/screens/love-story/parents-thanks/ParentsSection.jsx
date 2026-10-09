import ParentsCard from "./ParentsCard";

const ParentsSection = ({ texts }) => {
  return (
    <>
      <section className="pt-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="text-center mb-16"
            style={{ opacity: 1, transform: "translateY(20px)" }}
          >
            <span className="text-rose-500 font-medium mb-2 inline-block">
              {texts.parents_subtitle}
            </span>

            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              {texts.parents_title}
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-rose-200" />

              <img
                src="/icons/heart1.svg"
                alt="heart"
                className="lucide lucide-heart w-5 h-5 text-rose-400 fill-rose-400"
              />

              <div className="h-px w-12 bg-rose-200" />
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto">
              {texts.parents_texts}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10" style={{ opacity: 1 }}>
            <ParentsCard
              texts={texts}
              title={texts.groom_parents}
              imageDad="/images/dad.jpg"
              imageMom="/images/mom.jpg"
              nameDad={texts.groom_dad}
              nameMom={texts.groom_mom}
            />
            <ParentsCard
              texts={texts}
              title={texts.bride_parents}
              imageDad="/images/dad-in-law.jpeg"
              imageMom="/images/mom-in-law.jpeg"
              nameDad={texts.bride_dad}
              nameMom={texts.bride_mom}
            />
          </div>

          <p className="italic text-rose-500 mt-10 mb-14 text-md text-center">
            {texts.parents_texts2} ❤️
          </p>
        </div>
      </section>
    </>
  );
};

export default ParentsSection;
