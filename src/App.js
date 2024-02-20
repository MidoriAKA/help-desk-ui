import { useContext, useState } from 'react';
import './css/App.css';
import './css/reset.css';
import ticketDates from './dummy/dummy_4.json';
import { Side, Tickets } from './components/index';
import { SelectMenuContext } from './components/contexts/SelectMenuContext';

function App() {

  const [selectedMenu, sendClicked] = useState("all");

  return (
    <SelectMenuContext.Provider value={{selectedMenu, sendClicked}}>
      <div className="App">
        <Side />
        <Tickets
          ticketDates={ticketDates}
        />
        <p>Selected text: {selectedMenu}</p>
      </div>
    </SelectMenuContext.Provider>
  );
}

export default App;
// Path: src/components/Menu.jsx 
