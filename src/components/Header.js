import trollFace from "../images/troll-face.png";

function Header() {
  return (
    <nav className="navbar">
      <div>
        <img src={trollFace} alt="troll-face" width="40px" height="40px" />
        <h3>Meme Generator</h3>
      </div>
      <h4>React Course - Project 3</h4>
    </nav>
  );
}

export default Header;
