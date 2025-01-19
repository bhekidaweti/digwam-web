import '../styles/globals.css';


export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img
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
