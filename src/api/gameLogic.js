import { useState } from "react";
import { carImageData } from "./imageData";

export default function newGame(numberOfChoices) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    JSON.parse(localStorage.getItem("highScore")) || 0
  );
  const [choices, setChoices] = useState(getNewChoices([], numberOfChoices));
  const [prevChoiceArray, setPrevChoiceArray] = useState(new Array());

  return {
    score: score,
    highScore: highScore,
    choices: choices,
    choiceFunction: choiceFunction,
  };

  function choiceFunction(choice) {
    if (
      !prevChoiceArray.includes(choice) &&
      prevChoiceArray.length < carImageData.length - 5
    ) {
      let newPrevChoiceArray = prevChoiceArray;
      newPrevChoiceArray.push(choice);
      setPrevChoiceArray(newPrevChoiceArray);

      setScore(newPrevChoiceArray.length);

      setHighScore(score + 1 > highScore ? score + 1 : highScore);

      localStorage.setItem(
        "highScore",
        JSON.stringify(score + 1 > highScore ? score + 1 : highScore)
      );

      setChoices(getNewChoices(prevChoiceArray, numberOfChoices));
    } else {
      // setScore(0);
      // setPrevChoiceArray([]);
      // setChoices(getNewChoices([], numberOfChoices));
      console.log("game over");
    }
  }
}

function getNewChoices(prevChoiceArray, numberOfChoices) {
  let availableChoices = !prevChoiceArray.length
    ? Array.from(Array(carImageData.length).keys())
    : Array.from(Array(carImageData.length).keys()).filter(
        (item) => !prevChoiceArray.includes(item)
      );

  function getRandomArray(length) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let array = [];
    for (let i = 0; i < length; i++) {
      let randomNum = getRandomInt(carImageData.length);
      while (array.includes(randomNum)) {
        randomNum = getRandomInt(carImageData.length);
      }
      array.push(randomNum);
    }
    return array;
  }

  let choiceArray;

  do {
    choiceArray = getRandomArray(numberOfChoices);
  } while (
    availableChoices &&
    choiceArray.filter((item) => !availableChoices.includes(item)).length ===
      numberOfChoices
  );

  return choiceArray;
}
