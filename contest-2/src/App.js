import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CounterComponent from './Component/counter'
// import {useState, useEffect} from 'react'

const App = () => {
  // const [count, setCount] = useState(0);
  // const [showChildComponent, setShowChildComponent] = useState(false); 
  
  // useEffect(() => {
  //   console.log('Parent: Component has mounted')
  // }, [])
  
  // useEffect(() => {
  //   console.log('Parent: Component has updated')

  // }, [count, showChildComponent ])
  
  // if ((setCount(count + 1)) > 10){
  //   showChildComponent(true)
  // }
  
  
    return (
        //   <>
        // <h1>Counter</h1>
        // <h2>{count}</h2>
        // <button onClick= {() => setCount(count + 1) }>Increment</button>
        // <button onClick= {() => setCount(count - 1)}>Decrement</button>
        // {showChildComponent && <CounterComponent />}
        // <button onClick= {() => setShowChildComponent(setCount(0))}>go to back</button> 
        // </>
        <CounterComponent />
    );
  }

export default App;
