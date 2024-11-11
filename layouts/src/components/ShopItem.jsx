function ShopItem({ data }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <img src={data.img} alt={data.name} />
      <h2 className="card-title">{data.name}</h2>
      <div
        className="badge badge-secondary"
        style={{ backgroundColor: `${data.color}` }}
      ></div>
      <div className=" card-price accent">${data.price}</div>
      <button class="btn btn-accent">Add to cart</button>
    </div>
  );
}

export default ShopItem;
