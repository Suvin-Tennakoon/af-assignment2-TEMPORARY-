import axios from "axios";
import React, { Component } from "react";

class Createsubmision extends Component {
  constructor(props) {
    super(props);

    /*
     *setpanelMemberName() is a user ddefined function. React doesn't know about it.
     *so we need to bind that with library
     */
    this.setSubmitionName = this.setSubmitionName.bind(this);
    this.setDeadline = this.setDeadline.bind(this);
    this.AdditionDetails = this.AdditionDetails.bind(this);
    this.submitdata = this.submitdata.bind(this);
    this.setFile = this.setFile.bind(this);

    this.state = {
      Submitionname: "",
      Deadline: "",
      Additonaldetail: "",
      file:null
    };
  }

  setSubmitionName(e) {
    this.setState({ Submitionname: e.target.value });
  }

  setDeadline(e) {
    this.setState({ Deadline: e.target.value });
  }

  AdditionDetails(e) {
    this.setState({ Additonaldetail: e.target.value });
  }

  setFile(e) {
    this.setState({file: e.target.files[0]});
  }

  submitdata(e) {
    const Createsubmition = {
      submissionName: this.state.Submitionname,
      deadline: this.state.Deadline,
      additionalDetail: this.state.Additonaldetail,
      templateName: this.state.file.name,
    };

    console.log(Createsubmition);
    axios
      .post("http://localhost:3001/api/submission/add", Createsubmition)
        .then(() => {
          const data = new FormData();
          data.append('file', this.state.file);
          console.log(data);
          axios.post('http://localhost:3001/file/upload', data)
        })
      .then(() => {
        alert("Submition Added Successfully");
        //window.location="/"
      })
      .catch((err) => {
        alert(err.message);
      });
    e.preventDefalt();
  }

  render() {
    return (
      <div className="container">
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
                          Create Submitions{" "}
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div>
                            <label className="form-label" for="form3Example3c">
                              Submition Name
                            </label>
                            <input
                              type="text"
                              id="id1"
                              className="form-control"
                              value={this.state.Submitionname}
                              onChange={this.setSubmitionName}
                              required
                            />
                            <div id="fr"></div>
                          </div>
                          <br />

                          <div>
                            <label className="form-label" for="form3Example3c">
                              Deadline
                            </label>
                            <input
                              type="date"
                              id="id2"
                              className="form-control"
                              value={this.state.Deadline}
                              onChange={this.setDeadline}
                              required
                            />
                            <div id="fr"></div>
                          </div>
                          <br />

                          <div class="md-form">
                            <label className="form-label" for="form3Example3c">
                              Additonal Details
                            </label>
                            <textarea
                              type="text"
                              className="form-control"
                              id="id3"
                              value={this.state.Additonaldetail}
                              onChange={this.AdditionDetails}
                            ></textarea>
                          </div>
                          <br />

                          <div class="md-form">
                            <label className="form-label" for="form3Example3c">
                              Template Upload
                            </label>


                            <input className="form-control" type="file" id="formFile" onChange={(e) => {
                              this.setFile(e)
                            }}/>


                          </div>
                          <br />

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={this.submitdata}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://www.cognizantsoftvision.com/wp-content/uploads/2021/03/01211916/2696464-scaled.jpg"
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
export default Createsubmision;
