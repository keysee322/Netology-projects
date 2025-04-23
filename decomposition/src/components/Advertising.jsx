function Advertising(props) {
  //Блок к рекламным баннером
  return (
    <a href="">
      {props.dataImg != null ? <img src={props.dataImg} alt="" /> : <></>}
      {props.children}
    </a>
  );
}

export default Advertising;
