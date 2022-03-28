import { ReactElement } from 'react';
import Button from '../../common/Button';
import { Props } from './types';

function Pagination({ onClick }: Props): ReactElement<Props> {
  return (
    <div>
      <Button onClick={onClick}>Prev</Button>
      <Button>next</Button>
    </div>
  );
}

export default Pagination;