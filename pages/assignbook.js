import Layout from "../components/Layout";
import axios from "axios";
import styles from "./style.module.css";

class Assign extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentid: "",
      book_id: ""
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
      
     
      studentid: this.state.studentid,
        book_id:this.state.book_id
    };
    axios
      .post("http://localhost:3001/api/assignbook", data)
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
          <h2>Assign book to student</h2>
          <form onSubmit={this.handleSubmit}>
           
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
              <label className="col-sm-2 col-form-label">Book Id:</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="book_id"
                  id="book_id"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary mx-5">
                  Submit
                </button>
                <button type="reset" className="btn btn-primary mx-5">
                  Reset
                </button>
                
              </div>
            </div>
          </form>
        </div>
      </Layout>
    );
  }

}

export default Assign;