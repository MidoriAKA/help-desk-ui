import { useContext, useState } from 'react';
import './css/App.css';
import './css/reset.css';
import ticketDates from './dummy/dummy_1.json';
import { Side, Tickets } from './components/index';
import { MenuContext } from './components/contexts/MenuContext';

function App() {

  const [selectedMenu, sendClicked] = useState("all");

  return (
    <MenuContext.Provider value={{selectedMenu, sendClicked}}>
      <div className="App">
        <Side />
        <Tickets
          ticketDates={ticketDates}
        />
        <p>Selected text: {selectedMenu}</p>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
// Path: src/components/Menu.jsx 
