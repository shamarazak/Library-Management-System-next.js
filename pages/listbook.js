
import axios from 'axios'
import Layout from '../components/Layout'
import useSWR from 'swr';

export default function Listbook(){
    const fetcher = url => axios.get(url).then(res => res.data.response)
    const { data, error } = useSWR('http://localhost:3001/api/books', fetcher)
    console.log(data)

   
    return(
        <div>
            <Layout>
                <h2>List of all books</h2>
                <table >
                    <thead>
                        <tr>
                            <td>Book id</td>
                            <td>Name</td>
                            <td>Author</td>
                        </tr>
                    </thead>
                    <tbody>
                    {data?.map((book => <tr key={book.book_id}><td>{book.book_id}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td></tr>))}
                    </tbody>
                </table>
    </Layout>
    </div>
    )

}
