import './Body.css';
import carImage from '../assets/images/cadihd.jpg'; 
import BookingForm from './BookingForm';
import Services from './Services';

function Body() {
    return (
        <>
            <section id="headBar">
                <h1>Best WorldWide Chauffeur Services</h1>
            </section>

            <div className="image-container">
                <img src={carImage} alt="Luxury vehicle" className="featured-image" />
                <div className="text-overlay">
                    <h2>Explore the Luxury</h2>
                </div>
                <div className="form">
                
                    <BookingForm/>
                    

                </div>
                <Services/>
            </div>
        </>
    );
}

export default Body;
