import '../styles/globals.css';
import Img from 'next/image';


export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Img
                    src="/images/digwa-logo.png"
                    alt="Digwamaje Logo"
                    width="50"
                    height="50"
                    className="header-logo"
                />
                <h1 className="header-title">Digwamaje Grave Services - Restoaration for the Departed</h1>
            </div>
        </header>
    );
}
