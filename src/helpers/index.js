// const addNewValueToCoordinats = (randomNumber, maxCoordinates = 0, minCoordinates = 0) => {
//   let valueToChange = randomNumber;
//   if (randomNumber > maxCoordinates) {
//     valueToChange -= 1;
//     return addNewValueToCoordinats(valueToChange, maxCoordinates, minCoordinates);
//   }
//   if (randomNumber < minCoordinates) {
//     valueToChange += 1;
//     return addNewValueToCoordinats(valueToChange, maxCoordinates, minCoordinates);

//   return valueToChange;
// };

const setNewCoordinatForSameObject = (min, numberToChange, max) => {
  let newNumber = numberToChange;
  if (min < newNumber && newNumber < max) {
    newNumber += 1;
    return setNewCoordinatForSameObject(min, newNumber, max);
  }
  return newNumber;
};

const generateDefaultNumber = () => Math.random().toFixed(3) * 1000;

const setFieldForPlayer = (coordinat) => {
  if (coordinat.left <= 75 && coordinat.top <= 45) {
    coordinat.left += 1;
    return setFieldForPlayer(coordinat);
  }
  if (coordinat.top <= 75 && coordinat.left <= 45) {
    coordinat.top += 1;
    return setFieldForPlayer(coordinat);
  }
  return coordinat;
};

const getGetTopCoordinates = (realGameFieldHeight) => {
  let randomNumber = generateDefaultNumber();
  if (randomNumber < 15 || realGameFieldHeight - 15 < randomNumber) {
    randomNumber = getGetTopCoordinates(realGameFieldHeight);
  }
  return randomNumber;
};

const getGetLeftCoordinates = (realGameFieldWidth) => {
  let randomNumber = generateDefaultNumber();
  if (randomNumber < 15 || realGameFieldWidth - 15 < randomNumber) {
    randomNumber = getGetLeftCoordinates(realGameFieldWidth);
  }
  return randomNumber;
};

export const generateCoordinates = (realGameFieldWidth, realGameFieldHeight, arrayOfObstacleCoordinates) => {
  const coordinat = {};
  coordinat.left = getGetLeftCoordinates(realGameFieldWidth);
  coordinat.top = getGetTopCoordinates(realGameFieldHeight);
  setFieldForPlayer(coordinat);
  if (arrayOfObstacleCoordinates.length) {
    arrayOfObstacleCoordinates.forEach((element) => {
      if (element.top < coordinat.top && coordinat.top < element.top + 30) coordinat.top = setNewCoordinatForSameObject(element.top, coordinat.top, element.top + 30);
      if (element.left < coordinat.left && coordinat.left < element.left + 30) coordinat.left = setNewCoordinatForSameObject(element.left, coordinat.left, element.left + 30);
    });
  }
  return coordinat;
  // if (obstaclesCoordinates.length) {
  //   obstaclesCoordinates.forEach((element) => {
  //     const { top, left } = element;
  //     if (top <= randomNumber <= top + obstacleWidth || left <= randomNumber <= left + obstacleWidth) randomNumber = setNewCoordinatForSameObject(randomNumber, maxCoordinates, minCoordinates, left, top);
  //   });
  // }
  // return randomNumber;
};


export const getAmountOfObstacles = (realGameFieldWidth, realGameFieldHeight, amountOfPlayers = 1) => {
  const playerStartSquare = 30 * 30 * 3; // width&heigth of player, 3 play square
  const reservPlaceForPlayers = amountOfPlayers * playerStartSquare;
  const totalBattleFieldSquare = realGameFieldWidth * realGameFieldHeight - reservPlaceForPlayers;
  const amountOfObstacles = Math.round(totalBattleFieldSquare / 2 / 900); // totalBattleFieldSquare / 90 - squareOfObstacles
  return amountOfObstacles;
};
