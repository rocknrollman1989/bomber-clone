import { GameWindow, CreateObstacles } from './script/components/GameWindow/GameWindow';
import Hero from './script/components/Hero/Hero';
import { firstPlayerAction, actions } from './constants/actionConstants';
import { chekWayToCome, getAmountOfObstacles } from './helpers';

class GameProcess {
  constructor() {
    this.gameWindow = new GameWindow();
    this.playerIsMoving.bind(this.gameWindow);
    this.createObstaclesForGame();
    this.firstPlayer = new Hero({
      top: 15, left: 15, name: 'Вася', firstPlayerAction,
    });
    this.firstPlayer.playerIsMoving = this.playerIsMoving.bind(this);
  }

  createObstaclesForGame() {
    const parentDiv = document.createElement('div');
    parentDiv.className = 'obstaclesContainer';
    document.body.appendChild(parentDiv);
    const {
      realGameFieldWidth, realGameFieldHeight, gameSquare,
    } = this.gameWindow;
    const amountOfObstacles = getAmountOfObstacles(realGameFieldWidth, realGameFieldHeight, gameSquare);
    let createObstacles;
    for (let i = 0; i < amountOfObstacles; i += 1) {
      createObstacles = new CreateObstacles({ realGameFieldWidth, realGameFieldHeight, parentDiv });
    }
    this.createObstacles = createObstacles;
  }

  playerIsMoving(action, hero) {
    const { gameWindow, createObstacles } = this;
    const { obstaclesArray } = createObstacles;
    switch (action) {
      case actions.ACTION_LEFT:
        hero.style.left = chekWayToCome(gameWindow, obstaclesArray, Number.parseFloat(hero.style.left) - 1, 'left');
        break;
      case actions.ACTION_RIGHT:
        hero.style.left = chekWayToCome(gameWindow, obstaclesArray, Number.parseFloat(hero.style.left) + 1, 'left');
        break;
      case actions.ACTION_DOWN:
        hero.style.top = chekWayToCome(gameWindow, obstaclesArray, Number.parseFloat(hero.style.top) + 1, 'top');
        break;
      case actions.ACTION_UP:
        hero.style.top = chekWayToCome(gameWindow, obstaclesArray, Number.parseFloat(hero.style.top) - 1, 'top');
        break;
      case actions.SET_BOMB:
        break;
      default: break;
    }
  }
}

new GameProcess();
