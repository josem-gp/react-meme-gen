import memesData from "../memesData.js";
import { useState } from "react";

function Meme() {
  const [meme, setMeme] = useState(`${memesData.data.memes[0].url}`);

  function getMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    setMeme(memesArray[randomNumber].url);
  }

  return (
    <div className="input">
      <div>
        <div className="input-wrapper">
          <input type="text" placeholder="Top text"></input>
          <input type="text" placeholder="Bottom text"></input>
        </div>
        <button className="button" onClick={getMeme}>
          Get a new meme image 🖼
        </button>
        <div className="meme">
          <img src={meme} alt="random-mem" className="meme-image" />
          <h2 className="meme--text top">One does not simply</h2>
          <h2 className="meme--text bottom">Walk into Mordor</h2>
        </div>
      </div>
    </div>
  );
}

export default Meme;
