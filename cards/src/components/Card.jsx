function Card(props) {
  return (
    <div className="card">
      {props.dataImg != null ? <img src={props.dataImg} alt="" /> : <></>}
      {props.children}
    </div>
  );
}

export default Card;
