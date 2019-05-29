import './game_window.css';
import {
  GAME_BORDER, GAME_SQUARE, GAME_SQUARE_WIDTH, GAME_SQUARE_HEIGHT,
} from '../../../constants/gameConstants';

export class CreateObstacles {
  constructor(displayInfo) {
    this.realGameFieldWidth = displayInfo.realGameFieldWidth;
    this.realGameFieldHeight = displayInfo.realGameFieldHeight;
    this.obstacleId = CreateObstacles.idCounter;
    this.obstaclesArray = CreateObstacles.obstaclesArray;
    this.parentDiv = displayInfo.parentDiv;
    this.createObstacles();
  }

  createObstacles() {
    const {
      realGameFieldWidth, realGameFieldHeight,
    } = this;
    const obstacle = document.createElement('div');
    obstacle.className = 'obstacle';
    obstacle.style.width = `${GAME_SQUARE_WIDTH}px`;
    obstacle.style.height = `${GAME_SQUARE_HEIGHT}px`;
    obstacle.style.top = `${CreateObstacles.lastTopPoint}px`;
    obstacle.style.left = `${CreateObstacles.lastLeftPoint}px`;
    CreateObstacles.obstaclesArray.push({ top: CreateObstacles.lastTopPoint, left: CreateObstacles.lastLeftPoint, id: CreateObstacles.idCounter });
    CreateObstacles.lastLeftPoint += 2 * GAME_SQUARE_WIDTH;
    if (CreateObstacles.lastLeftPoint >= realGameFieldWidth) {
      if (CreateObstacles.lastTopPoint > realGameFieldHeight - GAME_SQUARE_HEIGHT) return;
      CreateObstacles.lineCounter += 1;
      CreateObstacles.lastTopPoint += GAME_SQUARE_HEIGHT;
      CreateObstacles.lastLeftPoint = CreateObstacles.lineCounter % 2 ? CreateObstacles.lastLeftPoint = GAME_BORDER : CreateObstacles.lastLeftPoint = GAME_BORDER + GAME_SQUARE_WIDTH;
    }
    this.parentDiv.appendChild(obstacle);
    CreateObstacles.idCounter += 1;
  }
}

CreateObstacles.idCounter = 0;
CreateObstacles.obstaclesArray = [];
CreateObstacles.lineCounter = 1;
CreateObstacles.lastTopPoint = GAME_BORDER;
CreateObstacles.lastLeftPoint = GAME_BORDER + GAME_SQUARE_WIDTH * 2;

export class GameWindow {
  constructor() {
    this.displayHeight = window.innerHeight;
    this.displayWidth = window.innerWidth;
    this.borderForWindow = GAME_BORDER;
    this.gameSquare = GAME_SQUARE;
    this.gameWindow = document.createElement('div');
    this.createGameWindow();
  }

  createGameWindow() {
    this.gameWindow.id = 'game_window';
    let neededWidth = this.displayWidth;
    let neededheigth = this.displayHeight;
    while (neededWidth % GAME_SQUARE_WIDTH) {
      neededWidth -= 1;
    }
    while (neededheigth % GAME_SQUARE_HEIGHT) {
      neededheigth -= 1;
    }
    this.gameWindow.style.width = `${neededWidth}px`;
    this.gameWindow.style.height = `${neededheigth}px`;
    this.realGameFieldWidth = neededWidth - this.borderForWindow * 2;
    this.realGameFieldHeight = neededheigth - this.borderForWindow * 2;
    document.body.appendChild(this.gameWindow);
  }
}
