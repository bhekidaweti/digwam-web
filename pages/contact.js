import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <>
            <Header />
            <Menu />
            <section className="container text-center mt-4">
                <h1>Contact Us</h1>
                <p>For all your grave services needs, please contact us using the details below:</p>
                <p>Address: 956 Legodi Street, Mohlakeng, Randfontain</p>
                <p>Phone: 082 361 0300</p>
                <p>Email: digwamajegraveservices23@gmail.com</p>
                <p>Facebook: </p>
                <p>Twitter: </p>
                <p>Instagram: </p>  
                <p>LinkedIn: </p>
                <p>TikTok: </p>
                
            </section>
            <Footer />
        </>
    );
}
