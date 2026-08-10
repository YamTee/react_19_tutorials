import "./App.css";
import { Welcome } from "./Welcome";
import Button from "./Button";
import { UserDetails } from "./UserDetails";
import { ParentComponent } from "./ParentComponent.jsx";

import { Plan } from "./Plan.jsx";

import { Product } from "./Product.jsx";

import { Alert } from "./Alert.jsx";

function App() {
  return (
    <>
      <section id="center">
        <Alert>
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
      </section>
    </>
  );
}

export default App;
