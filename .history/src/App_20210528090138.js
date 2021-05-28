import React from 'react'
import Shop from "./shop"
import { Switch,Route } from 'react-router-dom';

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
    creems,
    setCreems
  ] = useStickyState([], "creems")
  
  const getShops = () => {
    fetch(url + "/store/")
    .then((response) => response.json())
    .then((data) => {
      setShops(data)
    })
  }
  React.useEffect(() => {
    getShops()
  }, []);




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
     
      {/* {shop} */}
    </div>
  );
}


// render(<App />);

export default App