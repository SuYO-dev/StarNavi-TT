import React, { FC, useState, ChangeEvent, useContext } from 'react'
import HistoryWrapper from './History'
import Row from './Row'
import { CellContext } from '../services/context.service';

interface IData {
  name: string;
  field: number;
  id: string;
}
interface GameProps {
  data: IData[]
}

const Game: FC<GameProps> = ({ data }) => {

  const initialValue: IData = {
    name: 'Pick mode',
    field: 0,
    id: '0'
  }
  const history = useContext(CellContext);
  const [state, setState] = useState<IData>(initialValue)
  const [selectValue, setSelectValue] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const index = data.findIndex((item) => item.name === event.target.value)
    setState(initialValue)
    setSelectValue(event.target.value)
    setTimeout(() => {
      setState(data[index])
    }, 1)
    history.clearHistory()

  }

  return (
    <div className="App">

      <div className="settingsAndGame">
        <select value={selectValue} onChange={handleChange}>
          <option value={'Pick mode'} style={{ display: 'none' }}>Pick mode</option>
          {data.map((i, key) => (
            <option value={i.name} key={key}>{i.name}</option>
          ))}
        </select>
        <button>
          START
        </button>

        <div className="wrapper">
        {Array.from({ length: state.field }).map((i, key) => (
          <Row rowID={key + 1} size={state.field} key={key} />
        ))}
      </div>
      </div>
     
      <HistoryWrapper />

    </div>
  )
}

export default Game