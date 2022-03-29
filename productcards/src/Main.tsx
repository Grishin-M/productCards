import { useState, useEffect, SyntheticEvent, useCallback } from "react";
import { Card } from "./components/business/Card/types";
import { Cards } from "./components/business/Cards";
import Pagination from "./components/business/Pagination/Pagination";
import Input from "./components/common/Input/input";
import { SHOES_PER_PAGE } from "../src/consts/index";

export default function Main() {
  const [cards, setData] = useState([]);
  const [filterValue, setFilterValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setFilterValue(target.value as string);
  };

  const filterCards = (filterdCards: Card[]) => {
    return filterdCards.filter((card: Card) =>
      card.shoe.toLowerCase().startsWith(filterValue.toLocaleLowerCase())
    );
  };

  const lastShoesIndex = currentPage * SHOES_PER_PAGE;
  const firstrShoesIndex = lastShoesIndex - SHOES_PER_PAGE;
  const currentShoes = cards.slice(firstrShoesIndex, lastShoesIndex);

  const hanldeGoNextPage = () => {};

  const handleGoPrevPage = () => {
    // logic
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
        "X-RapidAPI-Key": "6eeb52144dmsh0d57ab0d76dd4eep1cd943jsnb32688adc6cc",
      },
    };

    fetch(
      "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=99&gender=men&page=10&brand=new%20balance%2C%20nike%2C%20puma%2C%20adidas%2C%20asics",
      options
    )
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Main">
      <Input filterValue={filterValue} onChange={handleChange} />
      {cards.length ? (
        <Cards cards={filterCards(currentShoes)} />
      ) : (
        <h3>Loading...</h3>
      )}
      <Pagination
        hanldeGoNextPage={hanldeGoNextPage}
        handleGoPrevPage={handleGoPrevPage}
      />
    </div>
  );
}
