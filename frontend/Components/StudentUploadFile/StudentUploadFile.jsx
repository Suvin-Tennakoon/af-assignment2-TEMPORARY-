import React, { Component } from "react";
import axios from "axios";

export default class StdUploadfile extends Component {
  render() {
    return (
      <div className="container">
        <br />
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
                            File Submition
                          </p>

                          <label for="formFileMultiple" class="form-label">
                            Your File Should be,<b> pdf , </b>
                            <b>doc , </b>
                            <b>docx </b>
                          </label>
                          <br />
                          <br />
                          <input
                            class="form-control"
                            type="file"
                            id="formFileMultiple"
                            multiple
                          />
                          <br />
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              class="btn btn-primary"
                              data-toggle="button"
                              aria-pressed="false"
                              autocomplete="off"
                            >
                              Submit
                            </button>
                          </div>
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
      </div>
    );
  }
}
