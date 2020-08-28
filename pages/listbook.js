import axios from "axios";
import Layout from "../components/Layout";
import useSWR from "swr";
import styles from './style.module.css'

export default function Listbook() {
  const fetcher = (url) => axios.get(url).then((res) => res.data.response);
  const { data, error } = useSWR("http://localhost:3001/api/books", fetcher);
  console.log(data);

  return (
    
      <Layout>
          <div className="container">
        <h2 className={styles.title}>List of all books</h2>
        <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th >Book id</th>
              <th>Name</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((book) => (
              <tr key={book.book_id}>
                <td>{book.book_id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      
    </div>
    </Layout>
  );
}
