import React from 'react';
import { Button } from 'react-bootstrap'
import './StartScreen.css'

class StartScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      redSelected: false,
      blueSelected: false,
      greenSelected: false,
      orangeSelected: false,
      yellowSelected: false,
    }
  }

  render() {
    const { redSelected, blueSelected, greenSelected, orangeSelected, yellowSelected } = this.state;

    const startDisabled = (
      Number(redSelected) +
      Number(blueSelected) +
      Number(greenSelected) +
      Number(orangeSelected) +
      Number(yellowSelected)
    ) !== 4;

    const red = redSelected
      ? (
        <div className="darkred person" onClick={this.handleRedSelected} >
          <h3>Red Inc.</h3>
          <div>
            Red Inc. specialises in a variety of global food products to keep their customers happy. You must focus on <b>agriculture</b>, <b>fish</b> and <b>livestock</b> to earn coins and keep your customers well-fed and satisfied.
          </div>
        </div>
      ) : (
        <div className="lightred person" onClick={this.handleRedSelected} >
          <h3>Red Inc.</h3>
          <div>
            Red Inc. specialises in a variety of global food products to keep their customers happy. You must focus on <b>agriculture</b>, <b>fish</b> and <b>livestock</b> to earn coins and keep your customers well-fed and satisfied.
          </div>
        </div>
      );

    const blue = blueSelected
      ? (
        <div className="darkblue person" onClick={this.handleBlueSelected}>
          <h3>Blue Inc.</h3>
          <div>
            Blue Inc. focuses on producing and shipping fresh grain and seafood products to customers around the world. To earn coins, you must focus on <b>oil</b>, <b>agriculture</b> and <b>fish</b> to keep your company running.
          </div>
        </div>
      ) : (
        <div className="lightblue person" onClick={this.handleBlueSelected}>
          <h3>Blue Inc.</h3>
          <div>
            Blue Inc. focuses on producing and shipping fresh grain and seafood products to customers around the world. To earn coins, you must focus on <b>oil</b>, <b>agriculture</b> and <b>fish</b> to keep your company running.
          </div>
        </div>
      );

    const green = greenSelected
      ? (
        <div className="darkgreen person" onClick={this.handleGreenSelected}>
          <h3>Green Inc.</h3>
          <div>Green Inc., despite its name, doesn’t seem quite as interested in the environment as it is interested in money. The conglomerate has identified 3 strategic resources, <b>oil</b>, <b>fish</b> and <b>wood</b> as your methods to earn coins.</div>
        </div>
      ) : (
        <div className="lightgreen person" onClick={this.handleGreenSelected}>
          <h3>Green Inc.</h3>
          <div>Green Inc., despite its name, doesn’t seem quite as interested in the environment as it is interested in money. The conglomerate has identified 3 strategic resources, <b>oil</b>, <b>fish</b> and <b>wood</b> as your methods to earn coins.</div>
        </div>
      );

    const orange = orangeSelected
      ? (
        <div className="darkorange person" onClick={this.handleOrangeSelected}>
          <h3>Orange Inc.</h3>
          <div>Orange Inc. relies on its diverse production and distribution of both paper and animal products to keep it afloat. To ensure that your customers receive your newest range of products quickly, you must focus on building <b>oil</b>, <b>livestock</b> and <b>wood</b> to earn coins.</div>
        </div>
      ) : (
        <div className="lightorange person" onClick={this.handleOrangeSelected}>
          <h3>Orange Inc.</h3>
          <div>Orange Inc. relies on its diverse production and distribution of both paper and animal products to keep it afloat. To ensure that your customers receive your newest range of products quickly, you must focus on building <b>oil</b>, <b>livestock</b> and <b>wood</b> to earn coins.</div>
        </div>
      );

    const yellow = yellowSelected
      ? (
        <div className="darkyellow person" onClick={this.handleYellowSelected}>
          <h3>Yellow Inc.</h3>
          <div>Yellow Inc.’s founder grew up in the countryside, and always loved the potential the lands have. The company now focuses solely on harvesting land resources, so you must focus on <b>agriculture</b>, <b>livestock</b> and <b>wood</b> to earn your coins.</div>
        </div>
      ) : (
        <div className="lightyellow person" onClick={this.handleYellowSelected}>
          <h3>Yellow Inc.</h3>
          <div>Yellow Inc.’s founder grew up in the countryside, and always loved the potential the lands have. The company now focuses solely on harvesting land resources, so you must focus on <b>agriculture</b>, <b>livestock</b> and <b>wood</b> to earn your coins.</div>
        </div>
      );

    return (
      <div>
        <div className="center">
          <div className="startGame">
            <Button bsStyle="success" bsSize="large" onClick={this.handleStartGame} disabled={startDisabled}>
              Start Game
          </Button>
          </div>
        </div>

        <div className="cards">
          {blue}
          {green}
          {orange}
          {red}
          {yellow}
        </div>
      </div>
    );
  }

  handleStartGame = () => {
    const {redSelected, blueSelected, greenSelected, orangeSelected, yellowSelected} = this.state;

    const selected = {
      redSelected,
      blueSelected,
      greenSelected,
      orangeSelected,
      yellowSelected,
    };

    this.props.startGame(selected);
  }

  handleRedSelected = () => this.setState((prevState) => ({ redSelected: !prevState.redSelected }));
  handleBlueSelected = () => this.setState((oldState) => ({ blueSelected: !oldState.blueSelected }));
  handleGreenSelected = () => this.setState((oldState) => ({ greenSelected: !oldState.greenSelected }));
  handleOrangeSelected = () => this.setState((oldState) => ({ orangeSelected: !oldState.orangeSelected }));
  handleYellowSelected = () => this.setState((oldState) => ({ yellowSelected: !oldState.yellowSelected }));
}

export default StartScreen;