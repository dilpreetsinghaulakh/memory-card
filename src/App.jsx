import "./App.css";
import icon from "/icon.svg";
import "@fontsource/syncopate";
import "@fontsource/bangers";

function App() {
  return (
    <>
      <header className="navbar">
        <a href="/" alt="Icon with home link">
          <img src={icon} alt="icon" /> Memory Game
        </a>
      </header>

      <main className="main-content">
        <div className="background">
          <div className="sun"></div>
          <div className="ground"></div>
        </div>
      </main>
    </>
  );
}

export default App;
