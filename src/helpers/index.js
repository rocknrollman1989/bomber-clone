const generateCoordinates = (coordinates, border = 15, obstacleWidth) => {
  // console.log(obstacleWidth);

  const randomNumber = Math.random().toFixed(3) * 1000;
  const realCoordinates = coordinates - border * 2 - obstacleWidth / 2;
  if (randomNumber > realCoordinates) {
    return generateCoordinates(coordinates);
  }
  return randomNumber;
};

export default generateCoordinates;
