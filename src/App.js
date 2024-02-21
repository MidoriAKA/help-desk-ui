import { useContext, useState } from 'react';
import './css/App.css';
import './css/reset.css';
import ticketDates from './dummy/dummy_4.json';
import { Side, Tickets } from './components/index';
import { SelectMenuContext } from './components/contexts/SelectMenuContext';
import { TicketsDatasContext } from './components/contexts/TicketsDatas';

function App() {

  const [selectedMenu, sendClicked] = useState("all");


  return (
    <SelectMenuContext.Provider value={{selectedMenu, sendClicked}}>
      <TicketsDatasContext.Provider>
      <div className="App">
        <Side />
        <Tickets
          ticketDates={ticketDates}
        />
        <p>Selected text: {selectedMenu}</p>
      </div>
      </TicketsDatasContext.Provider>
    </SelectMenuContext.Provider>
  );
}

export default App;
// Path: src/components/Menu.jsx 
