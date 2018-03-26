import React from 'react';
import livestockIcon from '../static/livestock.svg'
import woodIcon from '../static/wood.svg'
import fishIcon from '../static/fish.svg'
import agricultureIcon from '../static/agriculture.svg'
import oilIcon from '../static/oil.svg'
import { Button } from 'react-bootstrap'
import KeyHandler, { KEYPRESS } from 'react-key-handler';

const GameScreen = ({ globalDemand, oil, fish, livestock, agriculture, wood, endGame, generateDemand, selected }) => {
  const isLastTurn = globalDemand >= 30;

  const { redSelected, blueSelected, greenSelected, orangeSelected, yellowSelected } = selected;

  const red = redSelected
    ? (
      <div className="person lightred">
        <div>Red Inc.</div>
        <div>Fish: {fish + 3}</div>
        <div>Livestock: {livestock + 3}</div>
        <div>Agriculture: {agriculture + 2}</div>
      </div>
    ) : null;

  const blue = blueSelected
    ? (
      <div className="person lightblue">
        <div>Blue Inc.</div>
        <div>Oil: {oil + 2}</div>
        <div>Fish: {fish + 3}</div>
        <div>Agriculture: {agriculture + 2}</div>
      </div>
    ) : null;

  const green = greenSelected
    ? (
      <div className="person lightgreen">
        <div>Green Inc.</div>
        <div>Oil: {oil + 1}</div>
        <div>Fish: {fish + 3}</div>
        <div>Wood: {wood + 3}</div>
      </div>
    ) : null;

  const orange = orangeSelected
    ? (
      <div className="person lightorange">
        <div>Orange Inc.</div>
        <div>Oil: {oil + 1}</div>
        <div>Livestock: {livestock + 3}</div>
        <div>Wood: {wood + 3}</div>
      </div>
    ) : null;

  const yellow = yellowSelected
    ? (
      <div className="person lightyellow">
        <div>Yellow Inc.</div>
        <div>Livestock: {livestock + 3}</div>
        <div>Agriculture: {agriculture + 2}</div>
        <div>Wood: {wood + 3}</div>
      </div>
    ) : null;

  const demandButton = isLastTurn
    ? (
      <div>
        <KeyHandler keyEventName={KEYPRESS} keyValue=" " onKeyHandle={endGame} />
        <Button bsStyle="danger" bsSize="large" onClick={endGame}>
          End Game
      </Button>
      </div>
    ) : (
      <div>
        <KeyHandler keyEventName={KEYPRESS} keyValue=" " onKeyHandle={generateDemand} />
        <Button bsStyle="primary" bsSize="large" onClick={generateDemand}>
          Update Demand
        </Button>
      </div>
    );

  const demand = isLastTurn
    ? <h4 className="globalDemandRed">{`Total Demand of Resources: ${globalDemand}`}</h4>
    : <h4 className="globalDemand">{`Total Demand of Resources: ${globalDemand}`}</h4>;

  return (
    <div>
      <div className="center">
        <div className="wrapper">
          <div className="resource">
            Oil
            <img src={oilIcon} className="resourceImage" alt="oil" />
            <h2>{oil}</h2>
          </div>
          <div className="resource">
            Fish
            <img src={fishIcon} className="resourceImage" alt="fish" />
            <h2>{fish}</h2>
          </div>
          <div className="resource">
            Livestock
            <img src={livestockIcon} className="resourceImage" alt="livestock" />
            <h2>{livestock}</h2>
          </div>
          <div className="resource">
            Agriculture
            <img src={agricultureIcon} className="resourceImage" alt="agriculture" />
            <h2>{agriculture}</h2>
          </div>
          <div className="resource">
            Wood
            <img src={woodIcon} className="resourceImage" alt="wood" />
            <h2>{wood}</h2>
          </div>
        </div>
      </div>

      <div className="center">
        {demand}
      </div>

      <div className="center">
        <div className="demand">
          {demandButton}
        </div>
      </div>

      <div className="center">
        <h3>Corporation Demand</h3>
      </div>

      <div className="game-cards">
        {blue}
        {green}
        {orange}
        {red}
        {yellow}
      </div>
    </div>
  );
}

export default GameScreen;