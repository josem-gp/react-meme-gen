import memesData from "../memesData.js";
import { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);
  const [error, setError] = useState("");

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleMemeText(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((result) => {
        if (!result.ok) {
          throw Error("Error found! Couldn't connect");
        }
        return result.json();
      })
      .then((data) => {
        setAllMemeImages(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="input">
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleMemeText}
          ></input>
          <input
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleMemeText}
          ></input>
        </div>
        <button className="button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <div className="meme">
          <img src={meme.randomImage} alt="random-mem" className="meme-image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}

export default Meme;
