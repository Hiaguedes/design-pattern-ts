import Display from './display'
import RandomNumberGenerator from './subject';
import coloredDisplay from './colored.display';

const {registerObserver, notifyObservers, removeObserver} = RandomNumberGenerator();
const display = Display();
const colorDisplay = coloredDisplay();
const SECOND = 1000;

registerObserver(display);
registerObserver(colorDisplay);

setInterval(() => {
    notifyObservers()
}, 2 * SECOND)

function executeAsynchronously(functions, timeout) {
    for(var i = 0; i < functions.length; i++) {
      setTimeout(functions[i], timeout);
    }
  }

  executeAsynchronously([
    () => removeObserver(display), 
    () => removeObserver(colorDisplay), 
    () => registerObserver(display),
    () => registerObserver(colorDisplay),
    () => removeObserver(display), 
], 6 * SECOND)
