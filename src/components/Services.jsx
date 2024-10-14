
import './Services.css';
import airportTransferImage from '../assets/images/airport_transfer.jpg';
import cityRidesImage from '../assets/images/city_rides.jpg';
import hourlyRidesImage from '../assets/images/hourly_rides.jpg';
import longRidesImage from '../assets/images/long_rides.jpg';

function Services() {
    return (
        <section className="services-section">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="container">
                <div className="row">
                    {/* Airport Transfer Card */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card">
                            <img src={airportTransferImage} className="card-img-top" alt="Airport Transfer" />
                            <div className="card-body">
                                <h5 className="card-title">Airport Transfer</h5>
                                <p className="card-text">Reliable airport transfers with a comfortable ride experience.</p>
                            </div>
                        </div>
                    </div>
                    {/* City to City Rides Card */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card">
                            <img src={cityRidesImage} className="card-img-top" alt="City to City Rides" />
                            <div className="card-body">
                                <h5 className="card-title">City to City Rides</h5>
                                <p className="card-text">Travel seamlessly between cities with our comfortable rides.</p>
                            </div>
                        </div>
                    </div>
                    {/* Hourly Rides Card */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card">
                            <img src={hourlyRidesImage} className="card-img-top" alt="Hourly Rides" />
                            <div className="card-body">
                                <h5 className="card-title">Hourly Rides</h5>
                                <p className="card-text">Enjoy hourly rides with flexible booking options for your convenience.</p>
                            </div>
                        </div>
                    </div>
                    {/* Long Rides Card */}
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card">
                            <img src={longRidesImage} className="card-img-top" alt="Long Rides" />
                            <div className="card-body">
                                <h5 className="card-title">Long Rides</h5>
                                <p className="card-text">Experience long-distance travel in comfort and style.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
