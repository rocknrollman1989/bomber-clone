
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
    if (leftPosition + 30 > element.left && (topPosition > element.top && topPosition < element.top + 30)) {
      console.log('leftPosition:', leftPosition, 'element.left:', element.left);
      console.log('topPosition:', topPosition, 'element.top:', element.top);
      return true;
    }
    return false;
  });
  return filterValue;
};

const chekTopObstacles = (obstaclesArray, wayToCome) => {
  const { leftPosition, topPosition } = wayToCome;
  const filterValue = obstaclesArray.some((element) => {
    if (topPosition + 30 < element.top) {
      return false;
    }
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

export const checkTargetsToExpload = (bombCoordinates, bombFlameWidth, obstaclesArray) => {
  const realWidthAtSide = bombFlameWidth / 2;
  const { left, top } = bombCoordinates;
  return obstaclesArray.filter((element) => {
    if (left + realWidthAtSide > element.left && (top > element.top && element.top + 30 > top)) return true;
    if (top + realWidthAtSide > element.top && (left > element.left && element.left + 30 > left)) return true;
    if (left - realWidthAtSide > element.left + 30 && (top > element.top && element.top + 30 > top)) return true;
    if (top - realWidthAtSide > element.top + 30 && (left > element.left && element.left + 30 > left)) return true;
    return false;
  });
};
