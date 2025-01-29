import { JsxElement } from "typescript";
import { Star } from "./Star";
import { ReactElement } from "react";

interface ICountStars {
  count?: number;
}

export const Stars = ({ count = 0 }: ICountStars) => {
  const starsArr: ReactElement[] = [];
  for (let i = 1; i <= count; i++) {
    starsArr.push(<Star />);
  }
  return count < 1 || count > 5 ? (
    <></>
  ) : (
    <ul className="card-body-stars u-clearfix">
      <li>{starsArr}</li>
    </ul>
  );
};
