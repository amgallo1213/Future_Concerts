import { Router } from '@reach/router';
import './App.css';
import AllConcerts from './components/AllConcerts';
import AddConcert from './components/AddConcert';
import OneConcert from './components/OneConcert';
import PreviousConcert from './components/Previous';
import ConcertSearch from './components/Search';
import Photos from './components/Photos';
// import EditConcert from './components/EditConcert';





function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Router>
          <AllConcerts path="/home" />
          <AddConcert path="/concerts/create" exact component={AddConcert}/>
          <OneConcert path="/concerts/:id"  />
          {/* <EditConcert path="/concerts/update/:id" /> */}
          <PreviousConcert path="/concerts/previous" />
          <ConcertSearch path="/concerts/search" />
          <Photos path="/concerts/photos" />
        </Router>
        
        
      </header>
    </div>
  );
}

export default App;
