import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
  return (decimal.toFixed(2) + '%');
}

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
}

export const CalculateScore = ({ Name, School, total, goal }) => {
  return (
    <div className="formatstyle">
      <h2 style={{ color: 'brown', textAlign: 'center' }}>Student Details:</h2>
      <p className="Name">Name: <span style={{ fontWeight: 'normal', color: 'black' }}>{Name}</span></p>
      <p className="School">School: <span style={{ fontWeight: 'normal', color: 'black' }}>{School}</span></p>
      <p className="Total">Total: <span style={{ fontWeight: 'normal', color: 'black' }}>{total} Marks</span></p>
      <p className="Score">Score: {calcScore(total, goal)}</p>
    </div>
  );
};
