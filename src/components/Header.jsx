import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Escalade Ride</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="middle"></div>
                    <div className="collapse navbar-collapse my-custom-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 header">
                            <li className="nav-item me-5">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown me-5">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">City Local</a></li>
                                    <li><a className="dropdown-item" href="#">Airport Transfer</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link disabled">Contact Us</a>
                            </li>
                            <li className="nav-item me-5 book">
                                <a className="nav-link disabled">Book Now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
