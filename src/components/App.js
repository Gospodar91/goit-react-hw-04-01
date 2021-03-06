import React from "react";
import "./App.css";
import {  NavLink } from "react-router-dom";
import { useRouter } from "./router";

const App = () => {
  const routing = useRouter();
  return (
    <>
        <div className="HeaderLink">
          <ul className="LinkList">
            <li className="LinkItem">
              <NavLink  
              className ='AppLink'
                to="/home" 
                activeStyle={{
                  color: "red",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
                style={{
                  marginRight: "16px",
                  color: "inherit",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
              >
                {" "}
                HomePage
              </NavLink>
            </li>
            <li className="LinkItem">
              <NavLink      className ='AppLink'
                to="/moviesSearch/"
                activeStyle={{
                  color: "red",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontWeight: "500"
                }}
              >
                Movies
              </NavLink>
            </li>
          </ul>
          {routing}
        </div>
   
    </>
  );
};

export default App;
