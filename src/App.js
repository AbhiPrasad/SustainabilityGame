import React from 'react';
import './App.css'
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

const screen = Object.freeze({ "startScreen": 1, "gameScreen": 2, "endScreen": 3 })

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: screen.startScreen,
      livestock: 0,
      wood: 0,
      fish: 0,
      agriculture: 0,
      oil: 0,
      data: [],
      globalDemand: 0,
      selected: {
        redSelected: false,
        blueSelected: false,
        greenSelected: false,
        orangeSelected: false,
        yellowSelected: false,
      },
    }
  }

  render() {
    const {
      currentScreen,
      livestock,
      wood,
      fish,
      agriculture,
      oil,
      data,
      globalDemand,
      selected
    } = this.state;

    if (currentScreen === screen.startScreen) {
      return <StartScreen startGame={this.handleStartGame} />
    }

    if (currentScreen === screen.gameScreen) {
      return (
        <GameScreen
          globalDemand={globalDemand}
          oil={oil}
          fish={fish}
          livestock={livestock}
          agriculture={agriculture}
          wood={wood}
          endGame={this.handleEndGame}
          generateDemand={this.handleGenerateDemand}
          selected={selected}
        />
      );
    }

    if (currentScreen === screen.endScreen) {
      return <EndScreen data={data} continueGame={this.handleContinueGame} />
    }
  }

  handleStartGame = (selected) => this.setState({ currentScreen: screen.gameScreen, selected });

  handleEndGame = (event) => {
    event.preventDefault();
    this.setState({ currentScreen: screen.endScreen });
  }

  handleContinueGame = (event) => {
    event.preventDefault();
    this.setState({
      currentScreen: screen.startScreen,
      livestock: 0,
      wood: 0,
      fish: 0,
      agriculture: 0,
      oil: 0,
      data: [],
      globalDemand: 0,
    })
  }

  handleGenerateDemand = () => {
    const {
      oil,
      fish,
      livestock,
      agriculture,
      wood,
      data,
    } = this.state;

    const newOil = randNum(oil) + oil;
    const newFish = randNum(fish) + fish;
    const newLivestock = randNum(livestock) + livestock;
    const newAgriculture = randNum(agriculture) + agriculture;
    const newWood = randNum(wood) + wood;

    const globalDemand = newOil + newFish + newLivestock + newAgriculture + newWood;

    console.log()

    const newData = {
      name: `Turn ${data.length + 1}`,
      Oil: newOil,
      Fish: newFish,
      Livestock: newLivestock,
      Agriculture: newAgriculture,
      Wood: newWood,
      Total: globalDemand,
    };

    this.setState({
      oil: newOil,
      fish: newFish,
      livestock: newLivestock,
      agriculture: newAgriculture,
      wood: newWood,
      data: [...data, newData],
      globalDemand,
    });
  }
}

function randNum(currentAmountOfResources) {
  const max = 2;
  const min = -1;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  if (currentAmountOfResources < 1 && number === -1) {
    return Math.floor(Math.random() * (max + 1));
  } else if (currentAmountOfResources < 2 && number < 1) {
    return Math.floor(Math.random() * max) + 1;
  } else if (currentAmountOfResources > 6 && number === 2) {
    return Math.floor(Math.random() * min) + min;
  } else {
    return number;
  }
}

export default App;
