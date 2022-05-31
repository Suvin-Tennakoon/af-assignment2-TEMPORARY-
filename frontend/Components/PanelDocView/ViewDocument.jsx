import React, { Component, useState } from "react";
import axios from "axios";

class ViewDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Documents: [],
      Doc:[]
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/submission/getDocSubmissionPM")
      .then((res) => {
        //get all info about a supplier
        this.setState({ Documents: res.data });
        if(Documents.submissionType=="Presentation"){
             Doc = Documents;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    //const data=[this.state.props]
    const sp = this.state.Doc
    console.log(sp);

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Presentation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Topic Evaluation
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="sawrap">
          <div>
            <div
              className="card CScard"
              style={{
                width: "18rem",
                marginLeft: "40px",
                borderColor: "black",
              }}
            >
              
                <div className="card-body">
                  <h5 className="card-title">{sp.submissionType}</h5>
                  <p className="card-text">
                    <ul className="order">
                      <li>Student : {sp.author}</li>
                      <li>Submition Date: {sp.submittedDate}</li>
                      <li>Group ID: {sp.grpID}</li>
                    </ul>
                  </p>
                  <a className="btn btn-primary">Dounload</a>
                </div>
        
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewDocs;
