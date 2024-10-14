
import  { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: '',
        car: '',
        pickupAddress: '',
        dropoffAddress: '',
        dateTime: '',
        name: '',
        phone: '',
        email: '',
    });

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here (e.g., API call)
    };

    return (
        <div className={`booking-form-container step-${step}`}>
            <form onSubmit={handleSubmit} className="booking-form">
                {step === 1 && (
                    <div className="form-step">
                        <div className="mb-3">
                            <label htmlFor="selectService" className="form-label">Select Service</label>
                            <select
                                className="form-select"
                                id="selectService"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                            >
                                <option value="">Choose...</option>
                                <option value="city_local">City Local</option>
                                <option value="airport_transfer">Airport Transfer</option>
                                <option value="corporate">Corporate</option>
                                <option value="wedding">Wedding</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="selectCar" className="form-label">Select Car</label>
                            <select
                                className="form-select"
                                id="selectCar"
                                name="car"
                                value={formData.car}
                                onChange={handleChange}
                            >
                                <option value="">Choose...</option>
                                <option value="escalade">Escalade</option>
                                <option value="sedan">Sedan</option>
                                <option value="suv">SUV</option>
                                <option value="luxury_van">Luxury Van</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pickupAddress" className="form-label">Pickup Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pickupAddress"
                                name="pickupAddress"
                                value={formData.pickupAddress}
                                onChange={handleChange}
                                placeholder="Enter pickup address"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dropoffAddress" className="form-label">Dropoff Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="dropoffAddress"
                                name="dropoffAddress"
                                value={formData.dropoffAddress}
                                onChange={handleChange}
                                placeholder="Enter dropoff address"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateTime" className="form-label">Date and Time</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="dateTime"
                                name="dateTime"
                                value={formData.dateTime}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleNextStep}>
                            Next
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="form-step">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-buttons">
                            <button type="button" className="btn btn-secondary" onClick={handlePrevStep}>
                                Previous
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}

export default BookingForm;
