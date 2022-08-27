import { Router } from '@reach/router';
import './App.css';
import AllConcerts from './components/AllConcerts';
import AddConcert from './components/AddConcert';
import OneConcert from './components/OneConcert';





function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Router>
          <AllConcerts path="/home" />
          <AddConcert path="/concerts/create" exact component={AddConcert}/>
          <OneConcert path="/concerts/:id"  />
        </Router>
        
        
      </header>
    </div>
  );
}

export default App;
