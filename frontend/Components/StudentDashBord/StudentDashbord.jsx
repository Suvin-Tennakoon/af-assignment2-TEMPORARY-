import React, { Component } from "react";
import axios from "axios";
import "./StudentDashbord.css";

class DashBord extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="d-grid gap-3">  
                <a href="/createstdgrp" className="btn btn-primary btn-lg btn-block" role="button" aria-pressed="true">Group Registration</a>
                <a href="displayitem" className="btn btn-secondary btn-lg btn-block" role="button" aria-pressed="true">Research Topic Registration</a>
                <a href="displayitem" className="btn btn-secondary btn-lg btn-block" role="button" aria-pressed="true">Doccument Submision</a>
            </div><br/>
      </div>
    );
  }
}
export default DashBord;
