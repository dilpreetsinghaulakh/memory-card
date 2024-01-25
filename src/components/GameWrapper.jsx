import Card from "./Card";
import "./styles/gameWrapper.css";
import { carImageData } from "../api/imageData";
import getImages from "../api/getImages";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import newGame from "../api/gameLogic";

export default function GameWrapper() {
  const cardWrapper = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      const windowWidth = window.innerWidth;

      cardWrapper.current.style.transform = `scale(${
        (windowWidth * 0.8) / 1000
      })`;
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1280) {
        const windowWidth = window.innerWidth;

        cardWrapper.current.style.transform = `scale(${
          (windowWidth * 0.8) / 1000
        })`;
      } else {
        cardWrapper.current.style.transform = `scale(1)`;
      }
    });
  }, []);

  const game = newGame(5);

  return (
    <main className="game-main-content">
      <div className="game-wrapper-background">
        <div className="game-wrapper-sun"></div>
        <div className="game-wrapper-ground"></div>
      </div>
      <div className="game-wrapper">
        <div className="game-score">
          <p>Hi {game.highScore}</p>
          <p>Score {game.score}</p>
        </div>

        <div className="card-wrapper" ref={cardWrapper}>
          {game.choices.map((id) => {
            const [data, setPhotosResponse] = useState(null);
            getImages(Object.values(carImageData[id])[0])
              .then((result) => {
                setPhotosResponse(result.response.urls.small);
              })
              .catch((error) => {
                console.log(error);
              });
            return (
              <Card
                key={id}
                image={data}
                handleClick={() => {
                  game.choiceFunction(id);
                }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
