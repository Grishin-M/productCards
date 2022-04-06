import { ReactElement } from "react";
import Button from "../../common/Button";
import { Props } from "./types";
import "./Pagination.css";

function Pagination({
  handleGoPrevPage,
  hanldeGoNextPage,
  currentPage,
  totalPages,
}: Props): ReactElement<Props> {
  const isDisabledNext = currentPage === totalPages;
  const isDisabledPrev = currentPage === 1;
  return (
    <div className="cardsPagination">
      <Button onClick={handleGoPrevPage} isDisabled={isDisabledPrev}>
        Prev
      </Button>
      <span className="pagiSpan">
        {currentPage} of {totalPages}
      </span>
      <Button onClick={hanldeGoNextPage} isDisabled={isDisabledNext}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
