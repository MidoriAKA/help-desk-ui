import { useContext, useState } from 'react';
import './css/App.css';
import './css/reset.css';
import ticketDates from './dummy/dummy_4.json';
import { Side, Tickets } from './components/index';
import { SelectMenuContext } from './components/contexts/SelectMenuContext';
import { TicketsDatasProvider } from './components/contexts/TicketsDatas';

function App() {

  const [selectedMenu, sendClicked] = useState("all");


  return (
    <SelectMenuContext.Provider value={{selectedMenu, sendClicked}}>
      <TicketsDatasProvider>
      <div className="App">
        <Side />
        <Tickets />
        <p>Selected text: {selectedMenu}</p>
      </div>
      </TicketsDatasProvider>
    </SelectMenuContext.Provider>
  );
}

export default App;
// Path: src/components/Menu.jsx 
