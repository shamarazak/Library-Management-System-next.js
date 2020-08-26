
import axios from 'axios'
import Layout from '../components/Layout'

class Listbook extends React.Component{

    state={
        books: [],
    };
    componentDidMount(){
        axios.get('http://localhost:3001/api/books')
        
        .then(res =>{
            console.log(res);
            this.setState({books: res.data.response});
    

        })
        .catch(err => console.error(err));
       
    }

    render(){

        const list=<ol>
        {this.state.books.map((book => <li key={book.book_id}>{book.name}</li>
            ))}
    </ol>

        return(
            <Layout>
                <h2>List of all books</h2>
                {list}
            </Layout>
        )
    }
}

export default Listbook;