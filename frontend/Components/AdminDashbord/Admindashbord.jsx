import React, { Component } from "react";
import axios from "axios";
import "./StudentDashbord.css";

class AdminDashBord extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="d-grid gap-3">  
                <a href="/displayUlist" className="btn btn-primary btn-lg btn-block" role="button" aria-pressed="true">View Roles</a>
                <a href="/regpanel" className="btn btn-secondary btn-lg btn-block" role="button" aria-pressed="true">Add Panel Members</a>
                <a href="/panelmemallo" className="btn btn-secondary btn-lg btn-block" role="button" aria-pressed="true">Panel Member Allocation</a>
                <a href="/createsubmision" className="btn btn-secondary btn-lg btn-block" role="button" aria-pressed="true">Create Submition Types</a>
            </div><br/>
      </div>
    );
  }
}
export default AdminDashBord;
