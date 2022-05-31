import React, { Component } from "react";
import axios from "axios";
import "./StudentDashbord.css";

class SupervisorDashBord extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="d-grid gap-3">  
                <a href="/accepttopicsup" className="btn btn-primary btn-lg btn-block" role="button" aria-pressed="true">Topic Acceptance</a>
                <a href="displayitem" className="btn btn-secondary btn-lg btn-block" role="button" aria-pressed="true">Research Topic Registration</a>
                <a href="/displaysub" className="btn btn-secondary btn-lg btn-block" role="button" aria-pressed="true">Doccument Submission</a>
            </div><br/>
      </div>
    );
  }
}
export default SupervisorDashBord;
