import headerImage from "../assets/logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={headerImage}></img>
      <h1>React Investment Calculator</h1>
    </header>
  );
}
