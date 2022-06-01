import React, { Component } from "react";
import { Link, useParams, useHistory } from "react-router-dom";


import axios from "axios";

const Marking = (props) => {
 
  const data = [props];

  return (
    <tr>
      <td className="csan">{props.marking}</td>
      <td className="csan"><input  placeholder={props.marking}/></td>
    </tr>
  );
};


class MarkingSchema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Marking: []};
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/markingSheam/getAll")
      .then((res) => {
        //get all info about a student
        this.setState({ Marking: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    
  }

  Markingschem() {
    return this.state.Marking.map((currentmarking) => {
      return <Marking marking={currentmarking} />;
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <table class="chamoditable table table-hover">
          <thead className="thead-dark">
            <tr className="table-dark">
              <th className="csan" scope="col">
                Marking Criteria
              </th>
              <th className="csan" scope="col">
                Marks
              </th>
            </tr>
          </thead>
          <tbody>
          
            {this.Markingschem()}
            
          </tbody>
        </table>
        <br />
        <br />
      </div>
    );
  }
}

export default MarkingSchema;
