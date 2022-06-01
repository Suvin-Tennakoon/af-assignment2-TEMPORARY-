import React, {Component} from "react";
import {Link, useParams, useHistory} from "react-router-dom";

import axios from "axios";

const SupMarking = (props) => {

    return (
        props.marking.markingCriteria.map((mc) => {
            return (
                <tr>
                    <td className="csan">{mc.markedArea}</td>
                    <td className="csan"><input placeholder={`0/${mc.marksOutOf}`}/></td>
                </tr>
            )
        })
    )

};

class SupMarkingSchema extends React.Component {
    constructor(props) {
        super(props);
        this.state = {SupMarkingshem: []};
    }

    componentDidMount() {
        axios
            .get("http://localhost:3001/api/markingScheme/getAll")
            .then((res) => {
                //get all info about a student
                this.setState({SupMarkingshem: res.data});

            }).then((res) => {
            console.log(this.state.SupMarkingshem);
        })
            .catch((err) => {
                console.log(err);
            });

    }

    SupervisorMarkingschem() {
        return this.state.SupMarkingshem.map((currentmarking) => {
            if (currentmarking.submissionType == '')
                return <SupMarking supmarking={currentmarking}/>;
        });
    }

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
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

                    {this.SupervisorMarkingschem()}

                    </tbody>
                </table>
                <button  className="btn btn-primary">Calculation</button>
                <br/>
                <br/>
            </div>
        );
    }
}

export default SupMarkingSchema;
