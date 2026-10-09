import React, { useState, useEffect } from "react";
import axios from "axios";
import WishCard from "./WishCard";

const WishList = ({ texts }) => {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await axios.get("/wishes.json");

        setWishes(response.data.wishes);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="columns-1 gap-4 sm:columns-2 ">
      {wishes.map((wish, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <WishCard
            texts={texts}
            textsWish={wish.textsWish}
            nameAuthor={wish.nameAuthor}
            iconVisit={wish.iconVisit}
          />
        </div>
      ))}
    </div>
  );
};

export default WishList;
