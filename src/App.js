import logo from './logo.svg';
import './App.css';
import { HomeIcon, HomeIconSelected, ExploreIcon, TwitterIcon, ExploreIconSelected } from './components/icon';

function App() {
  return (
    <div className="App">
        <TwitterIcon/>
        <HomeIcon/>
        <HomeIconSelected/>
        <ExploreIcon/>
        <ExploreIconSelected/>
    </div>
  );
}

export default App;
