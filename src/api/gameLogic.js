import { carImageData } from "./imageData";

let prevChoiceArray = [];
let score = 0;
let highScore = JSON.parse(localStorage.getItem("highScore")) || 0;

export default function gameLogic(choice, numberOfChoices) {
  if (choice === null) {
    prevChoiceArray = [];
    score = 0;
    return {
      score: score,
      highScore: highScore,
      choices: getNewChoices([], numberOfChoices),
    };
  } else {
    if (!prevChoiceArray.includes(choice)) {
      score++;
      if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", JSON.stringify(highScore));
      }
      prevChoiceArray.push(choice);
      return {
        score: score,
        highScore: highScore,
        choices: getNewChoices([], numberOfChoices),
      };
    } else {
      return {
        score: score,
        highScore: highScore,
        choices: null,
      };
    }
  }
}

function getNewChoices(prevChoiceArray, numberOfChoices) {
  let availableChoices = prevChoiceArray.length
    ? Array.from(Array(carImageData.length).keys())
    : Array.from(Array(carImageData.length).keys()).filter(
        (item) => !prevChoiceArray.includes(item)
      );

  if (availableChoices.length) {
    let choiceArray = [];

    for (let i = 0; i < numberOfChoices; i++) {
      let randomIndex = Math.floor(Math.random() * availableChoices.length);
      choiceArray.push(availableChoices[randomIndex]);
      availableChoices.splice(randomIndex, 1);
    }

    return choiceArray;
  } else return null;
}
