import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FoodInfo from "./components/FoodInfo";

const App = () => {
  return (
    <Fragment>
      <Header />
      <FoodInfo />
      <Footer />
    </Fragment>
  );
};

export default App;
