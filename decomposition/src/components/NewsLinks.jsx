import NewsLinkItem from "./NewsLinkItem";
// сюда передаём массив объектов

function NewsLinks(props) {
  return (
    // здесь рендерим все новости нужной категории, в пропсах должен быть массив ссылок для одной категории
    <NewsLinkItem href="">Какой-то текст ссылки</NewsLinkItem>
  );
}
export default NewsLinks;
