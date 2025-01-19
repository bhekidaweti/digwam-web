import dynamic from 'next/dynamic';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Map = dynamic(() => import('./Map'), { ssr: false }); // Disable SSR for the Map component

export default function Footer() {
    return (
        <footer className="footer-class">
            <Map />
            <p>&copy; 2025 Digwamaje Grave Services | <i class="fa-solid fa-phone"></i> 082 361 0300 | <i class="fa-solid fa-location-dot"></i> 956 Legodi Street, Mohlakeng, Randfontain</p>
        </footer>
    );
}
