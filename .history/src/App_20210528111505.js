import React from 'react'
import Shop from "./shop"
import { Switch,Route } from 'react-router-dom';
import Creem from "./icecream"
import "./index.css"
import "./App.css"
function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

const url = "https://frozzy-ex.herokuapp.com"

function App() {
  const [
    count,
    setCount
  ] = useStickyState(0, "count");

  const [
    store,
    setShops
  ] = useStickyState([], "store");

  const [
    cart, 
    setCart
  ] = React.useState([])

  const getShops = () => {
    fetch(url + "/store/")
    .then((response) => response.json())
    .then((data) => {
      setShops(data)
    })
  }

  const [ 
    creems,
    setCreems
  ] = useStickyState([], "creems")
  
  const emptyCreem = {
    rating: [],
    name: "",
    img:  "",
    story: "",
    cost: 0,
  }

    // function that will get all the flavors
    const getCreems = () => {
      fetch(url + "/creem/")
      .then((response) => response.json())
      .then((data) => {
        setCreems(data)
      })
    }

  React.useEffect(() => {
    getShops()
    getCreems()
  }, []);

  const selectCart = (creem, index) => {
    console.log("State lifted")
    setCart([...cart, creem])
  }

  const removeFromCart = (pos) => {
    // console.log("pos",pos)
    const updatedCart = cart.filter((flavor, index) => index !== pos)
    setCart(updatedCart)
  }


  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <Switch>
        <Route path="/store"
        render={(rp) => 
          <Shop {...rp} store={store} />
        }
        />
      </Switch>
     
          <Switch>
        <Route path="/creem"
        render={(rp) => 
          
          <Creem {...rp} 
          creems={creems}           
          selectCart={selectCart}
          />
        
        }
        />
      </Switch>
    </div>
  );
}


// render(<App />);

export default App