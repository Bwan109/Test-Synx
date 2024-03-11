import './App.css';
import useFetch from './useFetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MasDoughnut from './components/MasDoughnut';
import TotalCharts from './components/TotalChart';
import Footer from './components/Footer';
import MasData from './components/MasData';
import CountryList from './components/CountryList';
import TotalData from './components/TotalData';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <TotalData></TotalData>
              <MasData></MasData>
              <br></br>
              <CountryList></CountryList>
            </Route>
            <Route exact path="/charts">
              <TotalCharts></TotalCharts>
              <MasDoughnut></MasDoughnut>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>

  )


}

export default App;
