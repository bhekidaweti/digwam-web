import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import '../styles/globals.css';


export default function Home() {
    return (
        <>
            <Header />
            <Menu />
            <section className="container text-center mt-4">
                <h1>Welcome to Digwamaje Grave Services</h1>
                <h2>Your trusted partner for dignified grave services.</h2>
            </section>

            <section className="image-gallery">
                <div className="image-container">
                    <img src="/images/slide1.jpg" alt="Grave Services 1" />
                </div>
                <div className="image-container">
                    <img src="/images/slide2.jpg" alt="Grave Services 2" />
                </div>
                <div className="image-container">
                    <img src="/images/slide3.jpg" alt="Grave Services 3" />
                </div>
            </section>

            <Footer />
        </>
    );
}

