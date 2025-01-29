import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Listing } from "./components/Listing";
import etsy from "./data/etsy.json";

export interface IImage {
  url_570xN?: string;
}

export interface IListingItems {
  listing_id: number;
  url?: string;
  MainImage?: IImage;
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}

const items: IListingItems[] = etsy;

export const App = () => {
  return <Listing items={items} />;
};
