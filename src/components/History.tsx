import React, { FC, useContext } from 'react'
import { CellContext } from '../services/context.service';


const HistoryWrapper: FC = () => {
  const data = useContext(CellContext);


  return (<div className='history'>
    <h2>Hover squares</h2>
    {data.cellHistory.map((i, key) => (
      <div className='history-wrapper' key={key}>{i}</div>
    ))}
  </div>)
}

export default HistoryWrapper