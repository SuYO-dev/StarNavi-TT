import { FC, useContext, useState } from 'react'
import { CellContext, ICellInterface } from '../services/context.service';

type Props = {
  rowID: number;
  cellID: number;
  size: number
};

const Cell: FC<Props> = ({ rowID, cellID, size }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const history = useContext<ICellInterface>(CellContext);
  const styles = {
    width: 200 / size + 'px',
    height: 200 / size + 'px',
  }

  return <div
    className={'cell' + (isHovered ? ' hovered' : '')}
    style={styles}
    onMouseEnter={() => {
      setIsHovered(prev => !prev);
      history.addHistory(`col:${cellID} row:${rowID}`)
    }}>
  </div>

};

export default Cell