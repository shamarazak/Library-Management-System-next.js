import axios from "axios";
import Layout from "../components/Layout";
import useSWR from "swr";
import styles from './style.module.css'

export default function Liststudent() {
  const fetcher = (url) => axios.get(url).then((res) => res.data.response);
  const { data, error } = useSWR("http://localhost:3001/api/students", fetcher);
  console.log(data);

  return (
    
      <Layout>
          <div className="container">
        <h2 className={styles.title}>List of all Students</h2>
        <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th >Student id</th>
              <th>Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((student) => (
              <tr key={student.Id}>
                <td>{student.Id}</td>
                <td>{student.name}</td>
                <td>{student.dept}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      
    </div>
    </Layout>
  );
}
