import Layout from "../components/Layout";
import axios from "axios";
import styles from "./style.module.css";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      studentid: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit(event) {
    event.preventDefault();

    const data = {
      
      name: this.state.name,
      studentid: this.state.studentid,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:3001/api/registration", data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <Layout>
        <div className="container">
          <h2>Registration</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name:</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Student Id:</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="studentid"
                  id="studentid"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email:</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">password:</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary mx-5">
                  Submit
                </button>
                
              </div>
            </div>
          </form>
        </div>
      </Layout>
    );
  }

}

export default Register;