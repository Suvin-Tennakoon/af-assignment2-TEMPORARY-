import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



export default function FileUpload () {

    const {subname} = useParams();

    const[uploadfile,setuploadfile] = useState();
    const[author,setauthor] = useState();
    const[groupid,setgroupid] = useState();


        
    const upload = (e) =>{
       

        const UplodFile = {
            subname,
            uploadfile,
            author,
            groupid
            
        }
    

        axios.post('',UplodFile)
        .then(()=>{
            alert('hari')
           
           
        }).catch((err)=>{
            console.log(err)
        })
    }
    

  
    return (
      <div className="container">
        <br />
        <br />
        <center>
          <div class="card" style={{ width: " 28rem" }}>
            <div class="card-body">
              <h5 class="card-title">Upload File</h5>
              <br />
              <label for="formFileMultiple" class="form-label">
                Your File Should be,<b> pdf , </b>
                <b>doc , </b>
                <b>docx </b>
              </label>
              <br />
              <p class="card-text" style={{ textAlign: "left" }}>
                Submition Type :
              </p>
              <input class="form-control" type="text" id="id1" value={subname} disabled/>
              <br />
              <p class="card-text" style={{ textAlign: "left" }}>
                Attachment :
              </p>
              <input
                class="form-control"
                type="file"
                id="formFileMultiple"
                multiple
                value={uploadfile}
                onChange={(e)=> {setuploadfile(e.target.value)}}
              />
              <br />
              <p class="card-text" style={{ textAlign: "left" }}>
                Authour :
              </p>
              <input class="form-control" type="text" id="id1" value={author} onChange={(e)=>{setauthor(e.target.value)}} />
              <br />

              <p class="card-text" style={{ textAlign: "left" }}>
                Group ID :
              </p>
              <input class="form-control" type="text" id="id2" value={groupid} onChange={(e)=>{setgroupid(e.target.value)}} />
              <br />
              <button type="button" onClick={upload}  class="btn btn-primary">
                Upload this file
              </button>
            </div>
          </div>
          <br />
          <br />
        </center>
      </div>
    );
  
}
