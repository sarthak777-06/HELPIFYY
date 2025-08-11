import React from "react";
import "./App.css";

function App() {
  return (
    <div className="background">
      {/* Navigation bar */}
      <nav className="navbar">
        <span>Home</span>
        <span className="explore">Explore</span>
        <span>MENU</span>
        <span>SignUp</span>
      </nav>

      {/* Main content */}
      <div className="container">
        <h1 className="title">
          WHAT ARE <br />
          YOU <br />
          LOOKING <br />
          FOR?
        </h1>

        {/* Search bar */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <button className="search-mic">
            <span role="img" aria-label="mic">
              🎤
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
