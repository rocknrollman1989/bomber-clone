
import './css/modules/game_window.css';
import FirstPlayer from './script/firstPlayer';
import SecondPlayer from './script/secondPlayer';

const app = () => {
  const myApp = document.getElementById('app');
  const layout = document.createElement('div');
  layout.id = 'game_window';
  myApp.appendChild(layout);
  const firstPlayer = new FirstPlayer('vasua');
  const secondPlayer = new SecondPlayer('petya');
};
export default app;
