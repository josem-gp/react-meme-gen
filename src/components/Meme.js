import memesData from "../memesData.js";

function Meme() {
  function getMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(memesArray[randomNumber].url);
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
      </div>
    </div>
  );
}

export default Meme;
