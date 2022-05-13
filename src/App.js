import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  // const [correctCode, setCorrectCode] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter Boca Code</h1> 
        <h2></h2> 
        <h3>{count}</h3>

        <section className='btn'>
        <button onClick={() => {if (count.length < 4) {setCount(count + '1')}}}>1</button>

        <button onClick={() => {if (count.length < 4) {setCount(count + '2')}}}>2</button>

        <button onClick={() => {if (count.length < 4) {setCount(count + '3')}}}>3</button>
        </section>

        <section className='btn'>
        <button onClick={() => {if (count.length < 4) {setCount(count + '4')}}}>4</button>
        <button onClick={() => {if (count.length < 4) {setCount(count + '5')}}}>5</button>
        <button onClick={() => {if (count.length < 4) {setCount(count + '6')}}}>6</button>

        </section>

        <section className='btn'>
        <button onClick={() => {if (count.length < 4) {setCount(count + '7')}}}>7</button>
        <button onClick={() => {if (count.length < 4) {setCount(count + '8')}}}>8</button>
        <button onClick={() => {if (count.length < 4) {setCount(count + '9')}}}>9</button>

        </section>

        <section>
        <button onClick={() => setCount('')}>Clear</button>
        <button onClick={() => {if (count.length < 4) {setCount(count + '0')}}}>0</button>
        <button onClick={() => setCount(count === '222' ? 'Come In!' : 'Try Again')}> ✅ </button>
        </section>

      </header>
    </div>
  );
}

export default App;
