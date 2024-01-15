import Card from "./Card";
import "./styles/gameWrapper.css";
import gameLogic from "../api/gameLogic";
import { carImageData } from "../api/imageData";
import getImages from "../api/getImages";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function GameWrapper() {
  const gameWrapper = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      const windowWidth = window.innerWidth;
      const wrapperWidth = gameWrapper.current.offsetWidth;

      console.log(windowWidth / wrapperWidth);

      gameWrapper.current.style.transform = `scale(${
        (windowWidth * 0.8) / 1000
      })`;
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1280) {
        const windowWidth = window.innerWidth;
        const wrapperWidth = gameWrapper.current.offsetWidth;

        console.log(windowWidth / wrapperWidth);

        gameWrapper.current.style.transform = `scale(${
          (windowWidth * 0.8) / 1000
        })`;
      }
      else {
        gameWrapper.current.style.transform = `scale(1)`;
      }
    });
  }, []);

  return (
    <main className="game-main-content">
      <div className="game-wrapper-background">
        <div className="game-wrapper-sun"></div>
        <div className="game-wrapper-ground"></div>
      </div>
      <div className="game-wrapper" ref={gameWrapper}>
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
