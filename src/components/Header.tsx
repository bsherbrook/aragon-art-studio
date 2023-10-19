import "../styles/Header.scss";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header-box">
        <div className="header-flex">
          <Link href="/" className="logo-link">
            <div className="logo-box">
              <h1 className="logo">AragonArtStudio</h1>
            </div>
          </Link>
          <nav className="nav-box">
            <Link href="/" className="nav-link">
              <button className="header-button">Home</button>
            </Link>
            <button className="header-button">Portfolio v</button>
            <Link href="/about" className="nav-link">
              <button className="header-button">About</button>
            </Link>
            <Link href="/contact" className="nav-link">
              <button className="header-button">Contact</button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
