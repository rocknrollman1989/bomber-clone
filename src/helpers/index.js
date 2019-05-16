let i = 0;

const generateCoordinates = ({ coordinates, border, obstacleWidth }) => {
  const randomNumber = Math.random().toFixed(3) * 1000;
  console.log(i, border);
  debugger;
  i += 1;
  const realCoordinates = coordinates - border * 2;
  if (randomNumber > realCoordinates) {
    return generateCoordinates(coordinates);
  }
  return randomNumber;
};

export default generateCoordinates;
