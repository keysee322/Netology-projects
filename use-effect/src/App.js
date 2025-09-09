import "./App.css";
import load from "./loading.svg";
import List from "./components/List";
import Details from "./components/Details";
import { useEffect, useState } from "react";

function App() {
  const [titleData, setTitleData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchInitData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
      );
      const jsonData = await response.json();
      setTitleData(jsonData);
    };
    fetchInitData();
  }, []);

  useEffect(() => {
    if (current === null) {
      return; // Пропускаем первый рендер
    }
    console.log("CLICK");

    setLoading(true);

    const fetchInitData = async () => {
      const response = await fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${current}.json`
      );
      const jsonData = await response.json();
      setItemData(jsonData);
      setLoading(false);
    };
    fetchInitData();
  }, [current]);

  return (
    <div className="App">
      <List data={titleData} setCurrent={setCurrent} current={current} />
      <img
        className="loading"
        src={load}
        alt=""
        style={{ display: loading === false ? "none" : "flex" }}
      />
      {current === null || loading === true ? "" : <Details data={itemData} />}
    </div>
  );
}

export default App;
