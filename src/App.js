import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Signin from "./Signin";
import Payment from "./Payment";
import { React, useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51KFjGjSAnXW4qBsWwwLmVM9zoPdzPRY7xrG7VbIXD3hYa6apIqmraIpBsr3gWScQ8gceHmP25udEkoVQNAdUcEwI00mI8NMpAB"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
