import React from "react";
import moment from "moment";
import "moment/locale/ru";

const DateTimePretty = (Component) => {
  return function WrappedComponent(props) {
    const formatDate = (date) => {
      const now = moment();
      const postDate = moment(date);
      const diffInMinutes = now.diff(postDate, "minutes");
      const diffInHours = now.diff(postDate, "hours");
      const diffInDays = now.diff(postDate, "days");

      if (diffInMinutes < 60) {
        return `${diffInMinutes} ${getNoun(
          diffInMinutes,
          "минута",
          "минуты",
          "минут"
        )} назад`;
      } else if (diffInHours < 24) {
        return `${diffInHours} ${getNoun(
          diffInHours,
          "час",
          "часа",
          "часов"
        )} назад`;
      } else {
        return `${diffInDays} ${getNoun(
          diffInDays,
          "день",
          "дня",
          "дней"
        )} назад`;
      }
    };

    // Функция для склонения существительных
    const getNoun = (number, one, two, five) => {
      let n = Math.abs(number);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return five;
      }
      n %= 10;
      if (n === 1) {
        return one;
      }
      if (n >= 2 && n <= 4) {
        return two;
      }
      return five;
    };

    const formattedDate = formatDate(props.date);

    return <Component {...props} date={formattedDate} />;
  };
};

export default DateTimePretty;
