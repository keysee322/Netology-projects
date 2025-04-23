import NewsBlock from "./NewsBlock";
import CurrentIndex from "./CurrentIndex";
import Advertising from "./Advertising";

const headerNews = [
  {
    categoryId: 0,
    title: "Cейчас в СМИ",
    content: "Путин упростил получение автомобильных номеров",
    prefixIcon: "__Prefix",
    link: "signup.leagueoflegends.com",
  },
  {
    categoryId: 0,
    title: "Cейчас в СМИ",
    content: "Путин упростил получение автомобильных номеров",
    prefixIcon: "__Prefix",
    link: "signup.leagueoflegends.com",
  },
  {
    categoryId: 1,
    title: "В Германии",
    content: "Путин упростил получение автомобильных номеров",
    prefixIcon: "__Prefix",
    link: "signup.leagueoflegends.com",
  },
  {
    categoryId: 2,
    title: "Рекомендуем",
    content: "Путин упростил получение автомобильных номеров",
    prefixIcon: "__Prefix",
    link: "signup.leagueoflegends.com",
  },
];

function Header() {
  // контент над поисковой строкой
  return (
    <header>
      <NewsBlock type="tabs">
        <CurrentIndex />
      </NewsBlock>
      <Advertising dataImg="">
        <h2>Заголовок рекламы</h2>
        <p>Текст рекламы</p>
      </Advertising>
    </header>
  );
}
export default Header;
