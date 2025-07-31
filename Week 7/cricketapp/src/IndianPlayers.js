import React from 'react';

const IndianPlayers = () => {
  const players = ["Sachin", "Dhoni", "Virat", "Rohit", "Yuvraj", "Rainad"];

  const oddPlayers = players.filter((_, index) => index % 2 === 0);
  const evenPlayers = players.filter((_, index) => index % 2 === 1);

  const T20Players = ["Mr. First Player", "Mr. Second Player", "Mr. Third Player"];
  const RanjiPlayers = ["Mr. Fourth Player", "Mr. Fifth Player", "Mr. Sixth Player"];
  const merged = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {oddPlayers.map((name, index) => (
          <li key={index}>
            {index === 0 && "First"} 
            {index === 1 && "Third"} 
            {index === 2 && "Fifth"}: {name}
          </li>
        ))}
      </ul>

      <h2>Even Players</h2>
      <ul>
        {evenPlayers.map((name, index) => (
          <li key={index}>
            {index === 0 && "Second"} 
            {index === 1 && "Fourth"} 
            {index === 2 && "Sixth"}: {name}
          </li>
        ))}
      </ul>

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {merged.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
