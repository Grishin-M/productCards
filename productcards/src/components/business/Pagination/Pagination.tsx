import { ReactElement } from "react";
import Button from "../../common/Button";
import { Props } from "./types";

function Pagination({
  handleGoPrevPage,
  hanldeGoNextPage,
}: Props): ReactElement<Props> {
  // isDisabledNext
  // isDisabledPrev
  return (
    <div>
      <Button onClick={handleGoPrevPage}>Prev</Button>
      <Button onClick={hanldeGoNextPage}>Next</Button>
    </div>
  );
}

export default Pagination;
