
import axios from 'axios'
import Layout from '../components/Layout'
import useSWR from 'swr';
import {useState,useEffect} from 'react';

export default function Listbook(){
    const fetcher = url => axios.get(url).then(res => res.data.response)
    const { data, error } = useSWR('http://localhost:3001/api/books', fetcher)
    console.log(data)

    /*const[data, setData] = useState([])
    useEffect(()=> {
        async function loadData(){
            const response = await axios('http://localhost:3001/api/books');
            setData(response.data.response)

        }
        loadData();

    },[]);*/
    return(
        <div>
            <Layout>
                <h2>List of all books</h2>
        <ol>
        {data?.map((book => <li key={book.book_id}>{book.name}</li>
            ))}
    </ol>
    </Layout>
    </div>
    )

}
