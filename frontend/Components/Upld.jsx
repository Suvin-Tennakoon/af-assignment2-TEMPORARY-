import React, {Component} from "react";
import axios from "axios";

export default class Upld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file:null,
            source:''
        }
        this.setFile = this.setFile.bind(this);
        this.submitFile = this.submitFile.bind(this);
        this.getFile = this.getFile.bind(this);
    }

    setFile(e) {
        this.setState({file: e.target.files[0]});
    }

    submitFile() {
        const data = new FormData();
        data.append('file', this.state.file);
        console.log(data);
        axios.post('http://localhost:3001/file/upload', data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    getFile() {
        axios.get('http://localhost:3001/file/Technical.docx')
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" onChange={(e) => {
                        this.setFile(e)
                    }}/>
                    <button onClick={()=>{this.submitFile()}}>submit</button>
                    <button onClick={()=>{this.getFile()}}>Get</button>
                    <div>
                        <a
                            href="http://localhost:3001/file/Technical.docx"
                            download
                        >
                            Click to download
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
