import React from 'react'


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
 

console.log(count)
  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <div  key={index}>
        <section id="shop-section">
          <div id='shop-image-container'>
            <div id='shop-image'>
              <img id='shop-img'src={shop.img}/>
            </div>
          </div>
          <div id='shop-name'>
            <h3>{shop.name}</h3>
          </div>
          <div id='shop-rating-container'>
            <img id='shop-rating' src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_RED_Icon-01-01_xqqell.png'/>
            <span>Rating: {average}</span>
            <span>{shop.location}</span>
          </div>
          <Link to='/main/icecream'>
            <button id='see-ic-button'> Order!</button>
          </Link>
        
        </section>
      </div>
    </div>
  );
}


// render(<App />);

export default App