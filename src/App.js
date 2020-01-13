import React, { Fragment } from "react";
import "./App.css";
import { Segment } from "semantic-ui-react";
import HeaderContainer from "./components/HeaderContainer";
import AddSocials from "./components/AddSocials";
import EnterData from "./components/EnterData";
import Footer from "./components/Footer";
const App = () => (
  <Fragment>
    <HeaderContainer />
    <AddSocials />
    <EnterData />
    <Footer />
  </Fragment>
);

export default App;
