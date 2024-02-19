import './css/App.css';
import './css/reset.css';
import ticketDates from './dummy/dummy_2.json';
import { Side, Tickets } from './components/index';

function App() {
  return (
    <div className="App">
      <Side />
      <Tickets
        ticketDates={ticketDates}
      />
    </div>
  );
}

export default App;
