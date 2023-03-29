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
    name: '',
    field: 0,
    id: '0'
  }
  const history = useContext(CellContext);
  const [state, setState] = useState<IData>(initialValue)
  const [selectedState, setSelectedState] = useState<IData>(initialValue)
  const [selectValue, setSelectValue] = useState<string>('')


  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const index = data.findIndex((item) => item.name === event.target.value)
    setSelectedState(data[index])
    setSelectValue(event.target.value)
  }

  const handleClick = () => {
    history.clearHistory()
    setState(initialValue)
    setTimeout(() => {
      setState(selectedState)
    }, 1)
    
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
        <button onClick={handleClick}>
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