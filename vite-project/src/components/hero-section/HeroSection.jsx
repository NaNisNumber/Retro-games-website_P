import "./HeroSection.css";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section className="gaming__hero-section">
      <div className="gaming__hero-container">
        <img className="gaming__hero-img-big" src="../Assets/heroImg.webp" />
        <header>
          <div className="gaming__hero-heading-container">
            <img className="gaming__logo" src="../../../Assets/logo.svg" />
            <h1 className="gaming__hero-heading">Retro Gaming</h1>
          </div>
          <p className="gaming__hero-text">
            Welcome to Retro Gaming World, we specialize in selling classic and
            retro games for a variety of platforms, including the Nintendo
            Entertainment System, Super Nintendo Entertainment System, Sega
            Genesis, and more.
          </p>
          <p className="gaming__hero-text">
            At Retro Gaming World, we believe that every gamer should have the
            opportunity to experience the nostalgia and excitement of retro
            gaming. That's why we offer a wide selection of games at affordable
            prices, so you can relive your childhood memories or discover new
            favorites without breaking the bank. Our inventory is constantly
            updating, so be sure to check back often for new arrivals.
          </p>
          <Link className="gaming__hero-link" to={"/shop"}>
            <button className="gaming__hero-btn">See Our Games</button>
          </Link>
        </header>
        <img className="gaming__hero-img-sm" src="../Assets/heroImg.webp" />
      </div>
    </section>
  );
}
