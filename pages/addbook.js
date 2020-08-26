import Layout from "../components/Layout";
import axios from 'axios'

class Addbook extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            book_id :'',
            name:'',
            author: '',

        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
   
    handleChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value

        });  
      }
      handleSubmit(event) {
        event.preventDefault();
       
        
            const data = { 
                book_id:this.state.book_id,
                name:this.state.name ,
                author:this.state.author
            }
            axios.post('http://localhost:3001/api/addbooks',data)
            .then((res)=>{
                console.log(res);

            })
            .catch((e) => {

              console.log(e)
            });
    

       
            
        }
      
        render()
        {
            return(
                <Layout>
        <form onSubmit={this.handleSubmit}>
        <table>
            <tr>
                <td>Book Id:</td>
                <td><input type="text" name="book_id" id="book_id" onChange={this.handleChange}/></td>
            </tr>
            <tr>
                <td>Book Name:</td>
                <td><input type="text" name="name" id="name"onChange={this.handleChange}/></td>
            </tr>
            <tr>
                <td>Author:</td>
                <td><input type="text" name="author"id="author" onChange={this.handleChange}/></td>
            </tr>
            <tr>
                
                <td><input type="submit" value="Submit"/></td>
                <td><input type="reset" value="Reset"/></td>
            </tr>
        </table>
    </form>
    </Layout>
            )
        }
       



}
export default Addbook
