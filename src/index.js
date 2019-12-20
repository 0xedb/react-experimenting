import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
const Lazy = lazy(() => import("./components/Lazy"));

function App() {
  return (
    <div className="App">
      Experimenting
      <Suspense fallback={<h4>loading...</h4>}>
        <Lazy />
      </Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
