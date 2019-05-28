
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

const chekLeftObstacles = (obstaclesArray, wayToCome) => {
  const { leftPosition, topPosition } = wayToCome;
  const filterValue = obstaclesArray.some((element) => {
    if (leftPosition + 30 < element.left) {
      return false;
    }
    if (leftPosition + 30 > element.left && (topPosition > element.top || topPosition + 30 > element.top)) {
      return true;
    }
    return false;
  });
  return filterValue;
};

const chekTopObstacles = (obstaclesArray, wayToCome) => {
  const { leftPosition, topPosition } = wayToCome;
  const filterValue = obstaclesArray.some((element) => {
    // if (leftPosition + 30 < element.left) {
    //   return false;
    // }
    if (topPosition + 30 > element.top && (leftPosition > element.left || leftPosition + 30 > element.left)) {
      return true;
    }
    return false;
  });
  return filterValue;
};

export const chekWayToCome = (gameWindow, obstaclesArray, wayToCome, typeOfAction) => {
  const { borderForWindow, realGameFieldWidth, realGameFieldHeight } = gameWindow;
  const { leftPosition, topPosition } = wayToCome;
  const minHeight = borderForWindow;
  const maxHeight = realGameFieldHeight - borderForWindow;
  const minWidth = borderForWindow;
  const maxWidth = realGameFieldWidth - borderForWindow;
  switch (typeOfAction) {
    case 'left':
      if (!chekCoordinat(minWidth, maxWidth, leftPosition)) return;
      if (chekLeftObstacles(obstaclesArray, wayToCome)) return;
      return `${leftPosition}px`;
    case 'top':
      if (!chekCoordinat(minHeight, maxHeight, topPosition)) return;
      if (chekTopObstacles(obstaclesArray, wayToCome)) return;
      return `${topPosition}px`;
    default: break;
  }
};
