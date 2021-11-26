import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));

// if (process.env.NODE_ENV === "development") {
//   const devRoot = document.querySelector("#_marketing-dev-root");
//   devRoot && mount(devRoot);
// }

// export { mount };
