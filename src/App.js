import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopBar from './components/TopBar';
import Background from './components/Background'
import StoreList from './components/StoreListings';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Background/>
      <StoreList/>
    </div>
  );
}

export default App;