function NewsLinkItem(props) {
  return (
    // компонент ссылка
    <a href="">
      {props.dataImg != null ? <img src={props.dataImg} alt="" /> : <></>}
      {props.children}
    </a>
  );
}
export default NewsLinkItem;
