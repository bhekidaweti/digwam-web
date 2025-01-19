import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';


export default function Menu() {
    return (
        <div className="menu">
        <ul>
          <li><button className='btn btn-warning'><Link href="/">Home</Link></button></li>
          <li><button className='btn btn-warning'><Link href="/services">Our Services</Link></button></li>
          <li><button className='btn btn-warning'><Link href="/about">About Us</Link></button></li>
          <li><button className='btn btn-warning'><Link href="/contact">Contact Us</Link></button></li>
          <li><button className='btn btn-success'> <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-download"></i> Download Catalogue</a></button></li>
        </ul>
      </div>
      
    );
}
