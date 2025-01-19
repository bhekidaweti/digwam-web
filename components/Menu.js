import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Menu() {
    return (
        <div className="menu">
        <ul>
          <li><button className='btn btn-warning'><a href="/">Home</a></button></li>
          <li><button className='btn btn-warning'><a href="/services">Our Services</a></button></li>
          <li><button className='btn btn-warning'><a href="/about">About Us</a></button></li>
          <li><button className='btn btn-warning'><a href="/contact">Contact Us</a></button></li>
          <li><button className='btn btn-success'> <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-download"></i> Download Catalogue</a></button></li>
        </ul>
      </div>
      
    );
}
