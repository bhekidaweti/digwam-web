import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import services from '../data/services';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/style.css';



export default function Home() {
    return (
        <>
            <Header />
            <Menu />
            <div className="container">
                    <div className='services'>
                        {services.map(service => (
                            <div key={service.id}>
                            <i className={`fas ${service.icon}`}></i> {service.name}
                                {/* <img src={service.img} alt={service.name} className='services-image' /> */}
                            </div>
                        ))}
                    </div>
            </div>
            <Footer />
        </>
    );
}