import { useState, useEffect, SyntheticEvent, useCallback } from "react";
import { Card } from "./components/business/Card/types";
import { Cards } from "./components/business/Cards";
import Pagination from "./components/business/Pagination/Pagination";
import Input from "./components/common/Input/input";
import { SHOES_PER_PAGE } from "../src/consts/index";
import { Box, CircularProgress } from "@mui/material";
import CustomizedDialogs from "./components/business/Popup/Popup";

export default function Main() {
  const [cards, setData] = useState([]);
  const [filterValue, setFilterValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openPopup, setOpenPopup] = useState(false);
  const [addToCardItem, setAddToCardItem] = useState<number>(0);

  const handleChange = useCallback((event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement; // type casting
    setFilterValue(target.value as string);
  }, []);

  const TOTAL_PAGES = Math.ceil(cards.length / SHOES_PER_PAGE);
  const lastShoesIndex = currentPage * SHOES_PER_PAGE;
  const firstrShoesIndex = lastShoesIndex - SHOES_PER_PAGE;

  const hanldeGoNextPage = useCallback(() => {
    if (currentPage >= TOTAL_PAGES) return;
    setCurrentPage(currentPage + 1);
  }, [currentPage, TOTAL_PAGES]);

  const handleGoPrevPage = useCallback(() => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  }, [currentPage]);

  const letsOpenPopup = () => {
    setOpenPopup(true);
  };
  const letsClosePopup = () => {
    setOpenPopup(false);
  };
  const addToCardCounter = useCallback(() => {
    setAddToCardItem(addToCardItem + 1);
  }, [addToCardItem]);

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
      <Input
        filterValue={filterValue}
        onChange={handleChange}
        addToCardItem={addToCardItem}
      />
      {cards.length ? (
        <Cards
          cards={cards
            .filter((card: Card) =>
              card.shoe
                .toLowerCase()
                .startsWith(filterValue.toLocaleLowerCase())
            )
            .slice(firstrShoesIndex, lastShoesIndex)}
          addToCardCounter={addToCardCounter}
          letsOpenPopup={letsOpenPopup}
        />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        hanldeGoNextPage={hanldeGoNextPage}
        handleGoPrevPage={handleGoPrevPage}
      />
      <CustomizedDialogs
        letsOpenPopup={letsOpenPopup}
        letsClosePopup={letsClosePopup}
        openPopup={openPopup}
      />
    </div>
  );
}
