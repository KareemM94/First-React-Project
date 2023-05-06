import HeadshotPhoto from './components/photo';
import Info from './components/info';
import Button from './components/button';
import About from './components/about';
import Interest from './components/interests';
import Icons from './components/icons';
import './App.css';

function App() {
  return (
    <div className='container'>
      <HeadshotPhoto />
      <div className='second-container'>
        <Info />
        <Button />
        <About />
        <Interest />
      </div>
      <div className='footer'>
      <Icons />
      
      </div>
      </div>
);
}

export default App;
