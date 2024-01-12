import Card from "./Card";
import "./styles/gameWrapper.css";
import gameLogic from "../api/gameLogic";
import { carImageData } from "../api/imageData";
import getImages from "../api/getImages";
import { useState } from "react";
import { useEffect } from "react";

export default function GameWrapper() {
  return (
    <main className="game-main-content">
      <div className="game-wrapper-background">
        <div className="game-wrapper-sun"></div>
        <div className="game-wrapper-ground"></div>
      </div>
      <div className="game-wrapper">
        {gameLogic(null, 5).choices.map((id) => {
          const [data, setPhotosResponse] = useState(null);
          return (
            useEffect(() => {
              getImages(Object.values(carImageData[id])[0])
                .then((result) => {
                  setPhotosResponse(result.response.urls.small);
                })
                .catch((error) => {
                  console.log(error);
                });

              return () => {};
            }, []),
            (
              <Card
                key={id}
                image={data}
                // clicked={card.clicked}
              />
            )
          );
        })}
      </div>
    </main>
  );
}
