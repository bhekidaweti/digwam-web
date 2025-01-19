import dynamic from 'next/dynamic';
import '../styles/style.css';

const Map = dynamic(() => import('./Map'), { ssr: false }); // Disable SSR for the Map component

export default function Footer() {
    return (
        <footer className="footer-class">
            <Map />
            <p>&copy; 2025 Digwamaje Grave Services | 📞 082 361 0300 | 📍 956 Legodi Street, Mohlakeng, Randfontain</p>
        </footer>
    );
}
