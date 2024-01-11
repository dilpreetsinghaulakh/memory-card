import icon from "/icon.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="/" alt="Icon with home link">
        <img src={icon} alt="icon" /> Memory Game
      </a>
    </header>
  );
}
