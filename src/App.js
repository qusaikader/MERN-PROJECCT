import React from "react";
import Auth from "./pages/Auth/Auth";
import tweetPage from "./pages/tweetPage/tweetPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="blur" style={{top: '-18%', right: '0'}}></div>
      <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
      <Auth/>
      {/* <tweetPage/> */}
    </div>
  );
}

export default App;
