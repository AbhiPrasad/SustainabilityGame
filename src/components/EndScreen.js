import React from 'react';
import { Button } from 'react-bootstrap'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const EndScreen = ({ continueGame, data }) => {
  return (
    <div>
      <div className="center">
        <div className="startGame">
          <Button bsStyle="info" bsSize="large" onClick={continueGame}>
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
  );
}

export default EndScreen;