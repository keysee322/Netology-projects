import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShopItemFunc from "./ShopItemFunc";
import LikeButton from "./components/LikeButton";

function App() {
  const item = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£",
  };

  // Внутри компонента App
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <LikeButton />
      </div>
    </div>
  );
}

export default App;
