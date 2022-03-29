import { ReactElement } from "react";
import Button from "../../common/Button";
import { Props } from "./types";

function Pagination({
  handleGoPrevPage,
  hanldeGoNextPage,
  currentPage,
  totalPages,
}: Props): ReactElement<Props> {
  console.log(totalPages, currentPage)
  const isDisabledNext = currentPage === totalPages;
  const isDisabledPrev = currentPage === 1;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <Button onClick={handleGoPrevPage} isDisabled={isDisabledPrev}>Prev</Button>
      <span style={{ marginRight: '10px', marginLeft: '10px' }}>№{currentPage}</span>
      <Button onClick={hanldeGoNextPage} isDisabled={isDisabledNext}>Next</Button>
    </div>
  );
}

export default Pagination;
