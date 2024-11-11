function ShopCard({ data }) {
  console.log(data);

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={data.img} alt={data.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
          <div
            className="badge badge-secondary"
            style={{ backgroundColor: `${data.color}` }}
          ></div>
        </h2>
        <div className="card-actions justify-between items-center">
          <div className="badge card-price accent">${data.price}</div>
          <button class="btn btn-accent">Add to cart</button>
        </div>
      </div>
    </div>
    // <div className="card">
    //   <h2 className="card-title">{data.name}</h2>
    //   <div className="card-color">{data.color}</div>
    //   <img className="card-img" src={data.img} alt={data.name} />
    //   <div className="card-bottom">
    //     <div className="card-price">${data.price}</div>
    //     <button className="btn btn-accent">Add to cart</button>
    //   </div>
    // </div>
  );
}

export default ShopCard;
