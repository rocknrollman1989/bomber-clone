
import './css/modules/game_window.css';
import FirstPlayer from './script/firstPlayer';

const app = () => {
  const myApp = document.getElementById('app');
  const layout = document.createElement('div');
  layout.id = 'game_window';
  myApp.appendChild(layout);
  const firstPlayer = new FirstPlayer('vasua');
};
export default app;
