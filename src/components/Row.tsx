import { FC } from 'react'
import Cell from './Cell'

type Props = {
  rowID: number;
  size: number;
};

const Row: FC<Props> = ({ rowID, size }) => {
  return (
    <div className='row'>
      {Array.from({ length: size }).map((i, key) => (
        <Cell rowID={rowID} cellID={key + 1} size={size} key={key} />
      ))}
    </div>
  )
}

export default Row