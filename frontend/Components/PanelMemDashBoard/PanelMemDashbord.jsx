import React, { Component } from "react";
import axios from "axios";

class PanelmemDashBord extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="d-grid gap-3">  
                <a href="/docview" className="btn btn-primary btn-lg btn-block" role="button" aria-pressed="true">View Submissions</a>
            </div><br/>
      </div>
    );
  }
}
export default PanelmemDashBord;
