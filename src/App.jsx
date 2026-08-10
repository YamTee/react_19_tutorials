import "./App.css";
import { Welcome } from "./Welcome";
import Button from "./Button";
import { UserDetails } from "./UserDetails";
import { ParentComponent } from "./ParentComponent.jsx";

function App() {
  return (
    <>
      <section id="center">
        <Welcome />

        <Button />

        <UserDetails name="YamTee" age={22} />

        <ParentComponent>
          <p>this is p1</p>
          <p>Content poassed to parent component as a child</p>
        </ParentComponent>
      </section>
    </>
  );
}

export default App;
