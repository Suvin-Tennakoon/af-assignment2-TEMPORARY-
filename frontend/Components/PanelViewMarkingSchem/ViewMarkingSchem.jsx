import React, { Component } from "react";
import { Link, useParams, useHistory } from "react-router-dom";


import axios from "axios";

const Marking = (props) => {
 
  const data = [props];

  return (
    <tr>
      <td className="csan">{props.marking.markingCriteria.markedArea}</td>
      <td className="csan"><input  placeholder={props.marking.markingCriteria.marksOutOf}/></td>
    </tr>
  );
};


class MarkingSchema extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Markingshem: []};
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/markingScheme/getAll")
      .then((res) => {
        //get all info about a student
        this.setState({ Markingshem: res.data });
        
      }).then((res)=>{
        console.log(this.state.Markingshem);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }

  Markingschem() {
    return this.state.Markingshem.map((currentmarking) => {
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
