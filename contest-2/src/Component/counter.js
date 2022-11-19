import React, { useState , useEffect} from 'react'


const CounterComponent = () => {
    const [count, setCount] = useState(0)

    const increment = ()=>{
        setCount(count+1);
    }

    const decrement = ()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            setCount(0);
            alert("Number can't be less than 0")
        }
    }
    const reset = ()=>{
        setCount(0);
    }

    useEffect(()=>{
        console.log(count)
    })
  return (
    <div className='container my-5'>
        <div className='card text-center my-5'>
            <div className="card-body">
                <h1>Counter</h1>
                <div className='my-5'>
                    <h2>{count}</h2>
                    <button className='btn btn-success mx-3' onClick={increment}>Increment</button>
                    <button className='btn btn-danger mx-3' onClick={decrement}>Decrement</button>
                    {count>=10 && (<button className='btn btn-secondary mx-3 my-3' onClick={reset}>Go To 0</button>)}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CounterComponent;