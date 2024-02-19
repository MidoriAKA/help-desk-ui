import { useState } from 'react';
import './css/App.css';
import './css/reset.css';
import ticketDates from './dummy/dummy_1.json';
import { Side, Tickets } from './components/index';

function App() {
  // const [currentMenuFilter, setMenuFilter] = useState("all");
  // const handleMenuFilter = (newFilter) => {
  //   setMenuFilter(newFilter);
  // };

  const [selectedMenu, setSelectedMenu] = useState("all");
  const handleMenuFilter = (newFilter) => {
    setSelectedMenu(newFilter);
  };

  return (
    <div className="App">
      <Side tempHandle = {handleMenuFilter}/>
      {/* <Side tempHandleMenuFilter={handleMenuFilter} /> */}
      <Tickets
        ticketDates={ticketDates}
      />
      <p>Selected text: {selectedMenu}</p>
    </div>
  );
}

export default App;
