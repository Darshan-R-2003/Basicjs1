import React from 'react';
import './App.css';
import Card1 from './Card1';
import Card2 from './Card2';

function App() {
  return (
    <div className="App">
      <Card1
        name="Darshan"
        age={19}
      />
      <Card2
        name="MS Dhoni"
        age={42}
        achievements="1) 2011 ODI World Cup,
        2) 2007 World T20,
        3) 2013 Champions Trophy, 
        4) ICC Test mace,
        5) Most matches as captain,
        6) Asia Cup,
        7) IPL Trophy"

        debut={2004}
        fathersname="Pan Singh Dhoni"
        mothersname="Devaki Devi"
        profession="Cricketer"
      />
    </div>
  );
}

export default App;

