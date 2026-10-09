const WishesHeader = ({ texts }) => {
  return (
    <div className="text-center space-y-4 mb-16">
      <span className="inline-block text-rose-500 font-medium">
        {texts.wishes_subtitle}
      </span>

      <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
        {texts.wishes}
      </h2>

      <div className="flex items-center justify-center gap-4 pt-4">
        <div className="h-[1px] w-12 bg-rose-200" />
        <img
          className="w-5 h-5 text-rose-400"
          src="/icons/chat.svg"
          alt="chat"
        />

        <div className="h-[1px] w-12 bg-rose-200" />
      </div>
    </div>
  );
};

export default WishesHeader;
