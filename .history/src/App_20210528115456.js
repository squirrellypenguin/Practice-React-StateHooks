import React from 'react'
import Shop from "./shop"
import { Switch,Route } from 'react-router-dom';
import Creem from "./icecream"
import Checkout from "./checkout"
import "./index.css"
import Nav from './nav'
import User from './user'
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
    getUsers()
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

  let [users, setUsers] = React.useState([])
  const getUsers = async () => {
    const response = await fetch(url + "/user");
    // console.log(response)
    const data = await response.json();
  //  console.log("read for this", data)
    setUsers(data)
  };
  const deleteUser = (user) => {
    fetch(url + "/user/" + user._id, {
      method: "delete"
    })
    .then(() => {
      getUsers()
    })
  
  }
  
  const [edit, setEdit] = React.useState()
  
  const selectedEdit = (user) => {
    setEdit(user)
  }
  return (
    <div className="App">
      <Nav />
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

            <Route path="/checkout" render={(rp) =>
          
          <Checkout 
          {...rp}
          cart={cart}
          removeFromCart={removeFromCart}
        
          />} />
        
        <Route path="/creem"
        render={(rp) => 
          
          <Creem {...rp} 
          creems={creems}           
          selectCart={selectCart}
          />
        
        }
        />

<Route exact path="/user" render={(rp) => 
          <User  {...rp} users={users} selectedEdit={selectedEdit} deleteUser={deleteUser}   />

} />
    {/* <Route

            exact
            path="/main/create"
            render={(rp) => (
              <Edituser 
              {...rp} 
              label="create" 
              user={emptyUser} 
           
              handleSubmit={handleUser} />
            )}
          />
    <Route
            exact
            path="/main/edit"
            render={(rp) => (
              <Edituser 
              {...rp} 
              label="update" 
              user={edit} 
           
              handleSubmit={handleEdit} />
            )}
          /> */}
      
      </Switch>
    </div>
  );
}


// render(<App />);

export default App