import { useState, useEffect, SyntheticEvent, useCallback } from "react";
import Cards from "../../components/business/Cards";
import Pagination from "../../components/business/Pagination/Pagination";
import Input from "../../components/common/Input/input";
import { SHOES_PER_PAGE } from "../../consts/index";
import { Box, CircularProgress } from "@mui/material";
import CustomizedDialogs from "../../components/business/Popup/Popup";
import TemporaryDrawer from "../../components/business/SideDraw/Drawer";
import { TCard } from "../../components/business/Card/types";
import { TPopupItem } from "../../components/business/Popup/types";
import { getData } from "../../api/products/get";

export default function Main() {
  // states
  const [cards, setData] = useState([]);
  const [filterValue, setFilterValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentShoe, setCurrentShoe] = useState<TPopupItem | null>(null);

  // constanst

  const TOTAL_PAGES = Math.ceil(cards.length / SHOES_PER_PAGE);
  const lastShoesIndex = currentPage * SHOES_PER_PAGE;
  const firstrShoesIndex = lastShoesIndex - SHOES_PER_PAGE;

  // selectors || dispatch || contexts
 
  // effects

  useEffect(() => {
    getData().then(({ results }) => setData(results));
  }, []);

  // handles 
  const handleChange = useCallback((event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement; // type casting
    setFilterValue(target.value as string);
  }, []);

  const hanldeGoNextPage = useCallback(() => {
    if (currentPage >= TOTAL_PAGES) return;
    setCurrentPage(currentPage + 1);
  }, [currentPage, TOTAL_PAGES]);

  const handleGoPrevPage = useCallback(() => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  }, [currentPage]);

  const onOpenPopUp = useCallback((id: string) => {
    setOpenPopup(true);
    const foundItem = cards.find((el: TPopupItem) => el.id === id);
    if (foundItem) setCurrentShoe(foundItem);
  }, [cards]);

  const onClosePopUp = useCallback(() => {
    setOpenPopup(false);
    setCurrentShoe(null);
  }, []);

  return (
    <div className="Main">
      <div className="main_wrapper">
        <Input filterValue={filterValue} onChange={handleChange} />
        <TemporaryDrawer />
      </div>
      {cards.length ? (
        <Cards
          cards={cards
            .filter((card: TCard) =>
              card.shoe
                .toLowerCase()
                .startsWith(filterValue.toLocaleLowerCase())
            )
            .slice(firstrShoesIndex, lastShoesIndex)}
          letsOpenPopup={onOpenPopUp}
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
        letsClosePopup={onClosePopUp}
        openPopup={openPopup}
        currentShoe={currentShoe}
      />
    </div>
  );
}
