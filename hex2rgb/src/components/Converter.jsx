import { useState } from "react";

function Converter() {
  const [data, setData] = useState({
    color: "#FFFFFF",
    rgb: "rgb(255, 255, 255)",
  });

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
          result[3],
          16
        )})`
      : null;
  }

  const handleValueChange = (event) => {
    const { target } = event;
    const { value } = target;
    setData({
      ...data,
      color: value,
    });
    setTimeout(() => {
      if (event.target.value.length === 7 && event.target.value[0] === "#") {
        setData({
          ...data,
          color: value,
          rgb: hexToRgb(value),
        });
      }
    }, 0);
  };

  return (
    <div className="converter" style={{ backgroundColor: data.rgb }}>
      <input
        id="color"
        name="color"
        type="text"
        value={data.color}
        onChange={handleValueChange}
      />
      <div className="answer">{data.rgb === null ? "Ошибка!" : data.rgb}</div>
    </div>
  );
}

export default Converter;
