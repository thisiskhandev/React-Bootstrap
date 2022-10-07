import React from "react";
// import Logo from "../assets/real-state-clipart.png";

// ES5
// export default function Card() {
//   return (
//     <>
//       <h1>Card</h1>
//     </>
//   );
// }

// ES6
const Card = (props) => {
  return (
    <>
      <div className="col-md-3 col-sm-12">
        <div
          className="card mt-3"
          style={{ width: "18rem", textAlign: "center" }}
        >
          <img
            // src={Logo}
            src={require("../assets/real-state-clipart.png")}
            style={{ width: 200, height: 200 }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="google.com" className="btn btn-success">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
