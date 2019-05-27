
export const getAmountOfObstacles = (realGameFieldWidth, realGameFieldHeight, gameSquare) => {
  const totalBattleFieldSquare = realGameFieldWidth * realGameFieldHeight;
  const amountOfObstacles = totalBattleFieldSquare / gameSquare / 2;
  return amountOfObstacles.toFixed();
};
const chekCoordinat = (minCoordinat, maxCoordinat, realCoordinat) => {
  if (realCoordinat < minCoordinat || realCoordinat > maxCoordinat) {
    return false;
  }
  return true;
};

const chekObstacles = (obstaclesArray, wayToCome, wayToMove) => {
  console.log(obstaclesArray, wayToCome, wayToMove);
  return true;
};

export const chekWayToCome = (gameWindow, obstaclesArray, wayToCome, typeOfAction) => {
  const { borderForWindow, realGameFieldWidth, realGameFieldHeight } = gameWindow;
  const minHeight = borderForWindow;
  const maxHeight = realGameFieldHeight - borderForWindow;
  const minWidth = borderForWindow;
  const maxWidth = realGameFieldWidth - borderForWindow;
  console.log(wayToCome);
  switch (typeOfAction) {
    case 'left':
      if (!chekCoordinat(minWidth, maxWidth, wayToCome)) return;
      if (!chekObstacles(obstaclesArray, wayToCome, 'left')) return;
      return `${wayToCome}px`;
    case 'top':
      if (!chekCoordinat(minHeight, maxHeight, wayToCome)) return;
      return `${wayToCome}px`;
      break;
    default: break;
  }
};
