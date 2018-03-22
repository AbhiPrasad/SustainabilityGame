import React from 'react';
import { Button } from 'react-bootstrap'

const StartScreen = ({startGame}) => {
  return (
    <div>
      <div className="center">
        <div className="startGame">
          <Button bsStyle="success" bsSize="large" onClick={startGame}>
            Start Game
          </Button>
        </div>
      </div>

      <div className="woo">
        <div className="cards">
          <div className="person">
            <div> Warren </div>
            <div>+2 Agriculture</div>
            <div>+3 Fish</div>
            <div>+3 Livestock</div>
          </div>
          <div className="person">
            <div> Jean </div>
            <div> +2 Oil </div>
            <div>+3 Agriculture</div>
            <div>+3 Fish</div>
          </div>
          <div className="person">
            <div>Mark</div>
            <div>+1 Oil</div>
            <div>+3 Fish</div>
            <div>+3 Wood</div>
          </div>
          <div className="person">
            <div>Jeff</div>
            <div>+2 Oil</div>
            <div>+3 Livestock</div>
            <div>+3 Wood</div>
          </div>
          <div className="person">
            <div>Meg</div>
            <div>+2 Agriculture</div>
            <div>+3 Livestock</div>
            <div>+3 Wood</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;