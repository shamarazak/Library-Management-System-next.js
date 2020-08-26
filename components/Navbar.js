import Link from 'next/link';

const Navbar =() =>(
   <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
       <div className="container">
           <a className="navbar-brand" href="#"> Library</a>
           <div className="collapse navbar-collapse">
               <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                       <Link href="/"><a className="nav-link">Home</a></Link>
                   </li>
                   <li className="nav-item">
                       <Link href="/addbook"><a className="nav-link">Add Book</a></Link>
                   </li>
                   <li className="nav-item">
                       <Link href="/listbook"><a className="nav-link">All Books</a></Link>
                   </li>
               </ul>
           </div> 
       </div>


   </nav>
    


);

export default Navbar;