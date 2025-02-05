import "./components/EV.css";
import { DerivedState } from "./components/hooks/DerivedState";

export const App = () => {
  return (
    <>
      <section className="container">
        <DerivedState />
      </section>
    </>
  );
};
