import NewsBlock from "./NewsBlock";

const AllNews = [
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
function Footer() {
  // контент под поисковой строкой
  return (
    <footer>
      <NewsBlock type="default"></NewsBlock>
      <NewsBlock type="default"></NewsBlock>
      <NewsBlock type="default"></NewsBlock>
      <NewsBlock type="default"></NewsBlock>
      <NewsBlock type="default"></NewsBlock>
    </footer>
  );
}

export default Footer;
