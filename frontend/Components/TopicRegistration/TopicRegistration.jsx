import React, { Component } from "react";
import axios from "axios";

class RegisterTopic extends React.Component {
  constructor(props) {
    super(props);

    /*
     *setpanelMemberName() is a user ddefined function. React doesn't know about it.
     *so we need to bind that with library
     */
    this.setResearchTopic = this.setResearchTopic.bind(this);
    this.saveResearchTopic = this.saveResearchTopic.bind(this);

    this.state = {
      ResearchTopic: "",
    };
  }

  //user defined method, takes event input

  setResearchTopic(e) {
    this.setState({ ResearchTopic: e.target.value });
  }

  saveResearchTopic(e) {
    console.log("ResearchTopic Data", this.state);

    const ResearchTopic = {
      researchtopic: this.state.ResearchTopic,
    };

    //send data to backend
    //3 parameters: url of backend api, data to send and configurations(optional)

    if (!this.state.ResearchTopic) {
      document.getElementById("id2").className = "form-control is-invalid";
      document.getElementById("pn").innerHTML = "You must Enter Research Topic";
      document.getElementById("pn").className = "invalid-feedback";
    } else {
      axios
        .post("http://localhost:3001/api/member/add", ResearchTopic)
        .then(() => {
          alert("Member Data Successfuly Inserted");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    //after submission, user will redirected here
    //window.location = '/';
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <section className="vh-50" style={{ backgroundcolor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderradius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Topic Registration{" "}
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div>
                            <label className="form-label" for="form3Example3c">
                              Research Topic
                            </label>
                            <input
                              type="text"
                              id="id2"
                              className="form-control"
                              value={this.state.ResearchTopic}
                              onChange={this.setResearchTopic}
                              required
                            />
                            <div id="pn"></div>
                          </div><br/>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={this.saveResearchTopic}
                            >
                              Request
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="http://raurnet.com/wp-content/uploads/2018/01/freelancer-care.png"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
      </div>
    );
  }
}
export default RegisterTopic;
