import logo from './logo.svg';
import './App.css';
import Testimonials from './Components/Testimonials';
import { dost } from './data';

function App() {
  return (
    <div className='wrapper'>
      <div className='hading'>
        <h1 className='title'>Our Testimonials</h1>
        <div className='line'></div>
      </div>
      <div>
        <Testimonials dost={dost}></Testimonials>
      </div>
    </div>
  );
}

export default App;
