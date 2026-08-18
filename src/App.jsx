import "./App.css";
import { Welcome } from "./Welcome";
import Button from "./Button";
import { UserDetails } from "./UserDetails";
import { ParentComponent } from "./ParentComponent.jsx";

import { Plan } from "./Plan.jsx";

import { Product } from "./Product.jsx";

import { Alert } from "./Alert.jsx";

import { Counter } from "./Counter.jsx";

import { CounterWithReducer } from "./CounterWithReducer";

import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer";

import { UserContextProvider } from "./UserContextProvider.jsx";
import { UserDetailsFromUserContext } from "./UserDetailsFromUserContext.jsx";
import { Stopwatch } from "./Stopwatch.jsx";
import { UseEffectComp } from "./UseEffectComp";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full rounded-xl bg-black p-6 shadow-lg">
        {/* <Alert>
          <p>Saved Successfully!</p>
        </Alert>

        <Welcome />

        <Button>
          <>Non Alert Button</>
        </Button>

        <Button alertOnClick={true} text="button is clicked!">
          <>Alert Button</>
        </Button>

        <UserDetails name="YamTee" age={22} />

        <ParentComponent>
          <p>this is p1</p>
          <p>Content poassed to parent component as a child</p>
        </ParentComponent>

        <Plan />
        <Product />

        <Counter />

        <br />
        <br />

        <br />

        <CounterWithReducer /> */}

        {/* <ShoppingCartWithReducer /> */}

        {/* <UserContextProvider>
          <UserDetailsFromUserContext />
        </UserContextProvider> */}

        {/* <Stopwatch /> */}

        <UseEffectComp />
      </div>
    </div>
  );
}

export default App;
