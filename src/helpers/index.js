const addNewValueToCoordinats = (randomNumber, maxCoordinates = 0, minCoordinates = 0) => {
  let valueToChange = randomNumber;
  if (randomNumber > maxCoordinates) {
    valueToChange -= 1;
    return addNewValueToCoordinats(valueToChange, maxCoordinates, minCoordinates);
  }
  if (randomNumber < minCoordinates) {
    valueToChange += 1;
    return addNewValueToCoordinats(valueToChange, maxCoordinates, minCoordinates);
  }
  return valueToChange;
};

const setNewCoordinatForSameObject = (randomNumber, maxCoordinates, minCoordinates, left, top) => {


};

const generateCoordinates = (coordinates, border, obstacleWidth, obstaclesCoordinates) => {
  let randomNumber = Math.random().toFixed(3) * 1000;
  const maxCoordinates = coordinates - border - obstacleWidth;
  const minCoordinates = border + obstacleWidth / 2;
  if (randomNumber > maxCoordinates || randomNumber < minCoordinates) {
    randomNumber = addNewValueToCoordinats(randomNumber, maxCoordinates, minCoordinates);
  }
  if (obstaclesCoordinates.length) {
    obstaclesCoordinates.forEach((element) => {
      const { top, left } = element;
      if (top <= randomNumber <= top + obstacleWidth || left <= randomNumber <= left + obstacleWidth) randomNumber = setNewCoordinatForSameObject(randomNumber, maxCoordinates, minCoordinates, left, top);
    });
  }
  return randomNumber;
};


export default generateCoordinates;
