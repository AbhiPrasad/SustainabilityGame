import React, { Component } from 'react';
import livestockIcon from './static/livestock.svg'
import woodIcon from './static/wood.svg'
import fishIcon from './static/fish.svg'
import agricultureIcon from './static/agriculture.svg'
import oilIcon from './static/oil.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const resources = [oil, ]

// <Header as="h1"> GLOBAL DEMAND </Header>

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStartScreen: true,
      livestock: 0,
      liveStockData: [],
      wood: 0,
      woodData: [],
      fish: 0,
      fishData: [],
      agriculture: 0,
      agricultureData: [],
      oil: 0,
      oilData: [],
      globalDemand: 0,
      isLastTurn: false,
      isContinueScreen: false,
    }
  }

  render() {
    const {
      isStartScreen,
      livestock,
      wood,
      fish,
      agriculture,
      oil,
      globalDemand,
      isLastTurn,
      isContinueScreen,
      oilData,
      fishData,
      liveStockData,
      agricultureData,
      woodData,
    } = this.state;

    if (isContinueScreen) {

      const data = []
      for (let i = 0; i < oilData.length; i++) {
        data.push({
          name: `Turn ${i + 1}`,
          Oil: oilData[i],
          Fish: fishData[i],
          Livestock: liveStockData[i],
          Agriculture: agricultureData[i],
          Wood: woodData[i],
        })
      }

      return (
        <div>
          <div className="center">
            <div className="startGame">
              <Button bsStyle="info" bsSize="large" onClick={this.continueGame}>
                Reset Game
              </Button>
            </div>
          </div>
          <div className="center">
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Oil" stroke="#0C0C0C" />
              <Line type="monotone" dataKey="Fish" stroke="#0089FF" />
              <Line type="monotone" dataKey="Livestock" stroke="#D22525" />
              <Line type="monotone" dataKey="Agriculture" stroke="#F7E700" />
              <Line type="monotone" dataKey="Wood" stroke="#2C8911" />
            </LineChart>
          </div>
        </div>
      )
    }

    if (isStartScreen) {
      return (
        <div className="center">
          <div className="startGame">
            <Button bsStyle="success" bsSize="large" onClick={this.startGame}>
              Start Game
            </Button>
          </div>
        </div>
      )
    }

    const demandButton = isLastTurn
      ? (
        <Button bsStyle="danger" bsSize="large" onClick={this.endGame}>
          End Game
        </Button>
      ) : (
        <Button bsStyle="primary" bsSize="large" onClick={this.handleGenerateDemand}>
          Roll Demand
        </Button>
      );

    const demand = isLastTurn
      ? <h1 className="globaDemandRed">{`Total Global Demand: ${globalDemand}`}</h1>
      : <h1 className="globalDemand">{`Total Global Demand: ${globalDemand}`}</h1>;

    return (
      <div>
        <div className="center">
          {demand}
        </div>
        <div className="center">
          <div className="wrapper">
            <div className="resource">
              {'Oil'}
              <img src={oilIcon} className="resourceImage" alt="oil" />
              <h2>{oil}</h2>
            </div>
            <div className="resource">
              {'Fish'}
              <img src={fishIcon} className="resourceImage" alt="fish" />
              <h2>{fish}</h2>
            </div>
            <div className="resource">
              {'Livestock'}
              <img src={livestockIcon} className="resourceImage" alt="livestock" />
              <h2>{livestock}</h2>
            </div>
            <div className="resource">
              {'Agriculture'}
              <img src={agricultureIcon} className="resourceImage" alt="agriculture" />
              <h2>{agriculture}</h2>
            </div>
            <div className="resource">
              {'Wood'}
              <img src={woodIcon} className="resourceImage" alt="wood" />
              <h2>{wood}</h2>
            </div>
          </div>
        </div>

        <div className="center">
          <div className="demand">
            {demandButton}
          </div>
        </div>
      </div>
    );
  }

  startGame = () => {
    this.setState({
      isStartScreen: false,
    });
  }

  endGame = () => {
    this.setState({ isContinueScreen: true });
  }

  continueGame = () => {
    this.setState({
      isStartScreen: true,
      livestock: 0,
      liveStockData: [],
      wood: 0,
      woodData: [],
      fish: 0,
      fishData: [],
      agriculture: 0,
      agricultureData: [],
      oil: 0,
      oilData: [],
      globalDemand: 0,
      isLastTurn: false,
      isContinueScreen: false,
    })
  }

  handleGenerateDemand = () => {
    const {
      oil,
      fish,
      livestock,
      agriculture,
      wood,
      oilData,
      fishData,
      liveStockData,
      agricultureData,
      woodData,
    } = this.state;

    const newOil = randNum(oil) + oil;
    const newFish = randNum(fish) + fish;
    const newLivestock = randNum(livestock) + livestock;
    const newAgriculture = randNum(agriculture) + agriculture;
    const newWood = randNum(wood) + wood;

    const globalDemand = newOil + newFish + newLivestock + newAgriculture + newWood;

    console.log(globalDemand >= 30),

      this.setState({
        oil: newOil,
        oilData: [...oilData, newOil],
        fish: newFish,
        fishData: [...fishData, newFish],
        livestock: newLivestock,
        liveStockData: [...liveStockData, newLivestock],
        agriculture: newAgriculture,
        agricultureData: [...agricultureData, newAgriculture],
        wood: newWood,
        woodData: [...woodData, newWood],
        globalDemand,
        isLastTurn: globalDemand >= 30,
      });
  }
}

function randNum(otherNum) {
  const max = 2;
  const min = -1;
  const number = Math.round(Math.random() * (max - min) + min);
  if (otherNum === 0 && number === -1) {
    return 0;
  } else {
    return number;
  }
}

export default App;
