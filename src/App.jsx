import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Stopwatch } from "./components/Stopwatch";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full rounded-xl bg-black p-6 shadow-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="stopwatch" element={<Stopwatch />} />
        </Routes>

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
      </div>
    </div>
  );
}

export default App;
