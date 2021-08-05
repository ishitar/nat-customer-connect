import './App.css';
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className='container'>
      <SideBar />
      <div className='other'></div>
      </div>
      

    </div>
  );
}

export default App;
