import logo from "./../logo.svg";
import Card from "./Card";

function CardsGrid() {
  return (
    <div className="card-grid">
      <Card dataImg={logo}>
        <h2>Card title</h2>
        <p>
          Loren ipsin dolor amet Loren ipsin dolor amet Loren ipsin dolor amet
          Loren ipsin dolor amet
        </p>
        <button>Click me</button>
      </Card>
      <Card>
        <h2>Card title</h2>
        <p>
          Loren ipsin dolor amet Loren ipsin dolor amet Loren ipsin dolor amet
          Loren ipsin dolor amet
        </p>
        <button>Click me</button>
      </Card>
      <Card dataImg={logo}>
        <h2>Card title</h2>
        <p>
          Loren ipsin dolor amet Loren ipsin dolor amet Loren ipsin dolor amet
          Loren ipsin dolor amet
        </p>
        <button>Click me</button>
      </Card>
      <Card>
        <h2>Card title</h2>
        <p>
          Loren ipsin dolor amet Loren ipsin dolor amet Loren ipsin dolor amet
          Loren ipsin dolor amet
        </p>
        <button>Click me</button>
      </Card>
      <Card dataImg={logo}>
        <h2>Card title</h2>
        <p>
          Loren ipsin dolor amet Loren ipsin dolor amet Loren ipsin dolor amet
          Loren ipsin dolor amet
        </p>
        <button>Click me</button>
      </Card>
      <Card>
        <h2>Card title</h2>
        <p>
          Loren ipsin dolor amet Loren ipsin dolor amet Loren ipsin dolor amet
          Loren ipsin dolor amet
        </p>
        <button>Click me</button>
      </Card>
    </div>
  );
}

export default CardsGrid;
