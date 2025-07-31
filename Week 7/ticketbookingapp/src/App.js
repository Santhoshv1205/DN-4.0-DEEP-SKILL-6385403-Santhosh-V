import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let pageContent;

  if (isLoggedIn) {
    // Logged-in User View
    pageContent = (
      <div>
        <h2>Welcome, User!</h2>
        <p>You can now book your flight tickets.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    // Guest View
    pageContent = (
      <div>
        <h2>Welcome, Guest!</h2>
        <p>Please login to book your tickets.</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ticket Booking Portal</h1>
      {pageContent}
    </div>
  );
}

export default App;
