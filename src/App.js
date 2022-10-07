import React from "react";
import Card from "./components/Card";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

// normal function type
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Wrapper title="okayboi">
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" />
        <Card title="Card 4" />
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
}
