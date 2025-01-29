import { JsxElement } from "typescript";
import { ListingItem } from "./ListingItem";
import { IListingItems } from "../App";
import { ReactElement, ReactNode } from "react";
import etsy from "../data/etsy.json";

type IListingItemsProps = {
  items: IListingItems[];
};

export const Listing = ({ items }: IListingItemsProps) => {
  const listItems: ReactNode = items.map((item, index) => (
    <div className="item" key={index}>
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage?.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {(item.title?.length as number) > 50
            ? item.title?.substring(0, 50)
            : item.title}
          {(item.title?.length as number) > 50 ? "…" : ""}
        </p>
        <p className="item-price">
          {item.currency_code == "USD"
            ? "$" + item.price
            : item.currency_code == "EUR"
            ? "€" + item.price
            : item.price + " " + item.currency_code}
        </p>
        <p
          className={
            (item.quantity as number) <= 10
              ? "item-quantity level-low"
              : (item.quantity as number) > 20
              ? "item-quantity level-high"
              : "item-quantity level-medium"
          }
        >
          {item.quantity} left
        </p>
      </div>
    </div>
  ));
  return <div className="item-list">{listItems}</div>;
};
