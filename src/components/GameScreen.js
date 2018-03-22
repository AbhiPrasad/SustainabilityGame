import React from 'react';
import livestockIcon from '../static/livestock.svg'
import woodIcon from '../static/wood.svg'
import fishIcon from '../static/fish.svg'
import agricultureIcon from '../static/agriculture.svg'
import oilIcon from '../static/oil.svg'
import { Button } from 'react-bootstrap'

const GameScreen = ({ globalDemand, oil, fish, livestock, agriculture, wood, endGame, generateDemand }) => {
  const isLastTurn = globalDemand >= 30;

  const demandButton = isLastTurn
    ? (
      <Button bsStyle="danger" bsSize="large" onClick={endGame}>
        End Game
        </Button>
    ) : (
      <Button bsStyle="primary" bsSize="large" onClick={generateDemand}>
        Roll Demand
        </Button>
    );

  const demand = isLastTurn
    ? <h4 className="globaDemandRed">{`Total Demand of Resources: ${globalDemand}`}</h4>
    : <h4 className="globalDemand">{`Total Demand of Resources: ${globalDemand}`}</h4>;

  return (
    <div>
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
        {demand}
      </div>

      <div className="center">
        <div className="demand">
          {demandButton}
        </div>
      </div>

      <div className="center">
        <h3>Personal Demand</h3>
      </div>

      <div className="woo">
        <div className="cards">
          <div className="person">
            <div> Warren </div>
            <div>Fish: {fish + 3}</div>
            <div>Livestock: {livestock + 3}</div>
            <div>Agriculture: {agriculture + 2}</div>
          </div>
          <div className="person">
            <div> Jean </div>
            <div>Oil: {oil + 2}</div>
            <div>Fish: {fish + 3}</div>
            <div>Agriculture: {agriculture + 2}</div>
          </div>
          <div className="person">
            <div>Mark</div>
            <div>Oil: {oil + 1}</div>
            <div>Fish: {fish + 3}</div>
            <div>Wood: {wood + 3}</div>
          </div>
          <div className="person">
            <div>Jeff</div>
            <div>Oil: {oil + 1}</div>
            <div>Livestock: {livestock + 3}</div>
            <div>Wood: {wood + 3}</div>
          </div>
          <div className="person">
            <div>Meg</div>
            <div>Livestock: {livestock + 3}</div>
            <div>Agriculture: {agriculture + 2}</div>
            <div>Wood: {wood + 3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameScreen;