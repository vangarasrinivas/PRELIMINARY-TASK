import React from "react";
import ReactDOM from "react-dom";

// import "./index.css";

// import AppHomeComponent from "./components/006AppHomeCompnt";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";

import reportWebVitals from "./reportWebVitals";

// import MovieComp from './components/movie/MovieComp'
// import Movies from './components/movies/movies'

// // Small Shopng Cart
// import SmallCartIndex from "./components/SmallE-CommerceProject/index";

// // Amazona SHoppinCart
// import ShopIndex from "./components/Amazona-Basir/template/ShopIndex";
// import { Provider } from "react-redux";
// import store from "./components/Amazona-Basir/template/store";

// import "./Movie App Preliminary Task/style.css";

import MovieAppPT from "./Movie App Preliminary Task";

ReactDOM.render(
  // <div>
  //   {/* <SmallCartIndex />

  //     <ShopIndex /> */}
  //   <AppHomeComponent />
  // </div>,

  // <Provider store={store}>
  //   <ShopIndex />
  // </Provider>,

  <MovieAppPT></MovieAppPT>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
