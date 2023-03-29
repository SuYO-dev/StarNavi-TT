import React, { useEffect, useState } from 'react';
import './App.scss';
import {Context} from './services/context.service';
import GameScreen from './components/Game';
import Preloader from './components/Preloader';

interface IData {
  name: string;
  field: number;
  id: string;
}

function App() {
  const [data, setData] = useState<IData[]>([])

  useEffect(() => {
    fetch("https://60816d9073292b0017cdd833.mockapi.io/modes")
      .then(res => res.json())
      .then( result => {
          setData(result);
        }
      )
  },[])

  return (
    <Context>
      {data.length ? <GameScreen data={data} /> : <Preloader  />}
    </Context>
  );
}

export default App;
