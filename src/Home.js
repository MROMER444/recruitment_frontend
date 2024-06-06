import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Form.css';

const Form = () => {
    const [citiesList] = useState([
        'Baghdad', 'Basra', 'Nineveh', 'AlAnbar', 'Sulaymaniyah', 'Erbil', 'Diyala',
        'Karbala', 'Kirkuk', 'Babil', 'Najaf', 'DhiQar', 'Maysan', 'Muthanna',
        'Qadisiyyah', 'Wasit', 'Salah_al_Din', 'Dohuk'
    ]);

    const [degreeOptions] = useState([
        'Bachelor', 'Master', 'PhD', 'Associate', 'Diploma', 'Certificate'
    ]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [degree, setDegree] = useState('');
    const [experience, setExperience] = useState('');
    const [photo, setPhoto] = useState(null);
    const [photoError, setPhotoError] = useState('');
    const [resume, setResume] = useState(null);
    const [resumeError, setResumeError] = useState('');

    const navigate = useNavigate(); 

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleIntroductionChange = (event) => {
        setIntroduction(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleFieldOfStudyChange = (event) => {
        setFieldOfStudy(event.target.value);
    };

    const handleDegreeChange = (event) => {
        setDegree(event.target.value);
    };

    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPhoto(file);
            setPhotoError('');
        } else {
            setPhoto(null);
            setPhotoError('Invalid file type. Please upload an image (PNG, GIF, JPEG).');
        }
    };

    const handleResumeChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setResume(file);
            setResumeError('');
        } else {
            setResume(null);
            setResumeError('Invalid file type. Please upload a PDF file.');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate('/preview', {
            state: {
                name,
                email,
                phone,
                introduction,
                age,
                city,
                fieldOfStudy,
                degree,
                experience,
                photo,
                resume,
            },
        });
    };
    

    return (
        <form className="centered-form" onSubmit={handleSubmit}>
            <div className="mb-3 form-group">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Applicant Name (first name and last name)"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
            </div>

            <div className="mb-3 form-group">
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email address (must include @)"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>

            <div className="mb-3 form-group">
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number (up to 32 characters)"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={32}
                    required
                />
            </div>

            <div className="mb-3 form-group">
                <input
                    type="text"
                    className="form-control"
                    id="introduction"
                    placeholder="Short Introduction (up to 100 characters)"
                    value={introduction}
                    onChange={handleIntroductionChange}
                    maxLength={100}
                    required
                />
            </div>

            <div className="mb-3 form-group">
                <input
                    type="text"
                    className="form-control"
                    id="age"
                    placeholder="Age (integer - required)"
                    value={age}
                    onChange={handleAgeChange}
                    required
                />
            </div>

            <div className="mb-3 form-group">
                <label htmlFor="city">City (selection - required)</label>
                <select
                    id="city"
                    className="form-control"
                    value={city}
                    onChange={handleCityChange}
                    required
                >
                    <option value="">Select a city</option>
                    {citiesList.map((cityName) => (
                        <option key={cityName} value={cityName}>{cityName}</option>
                    ))}
                </select>
            </div>

            <div className="mb-3 form-group">
                <input
                    type="text"
                    className="form-control"
                    id="fieldOfStudy"
                    placeholder="Field of Study (required)"
                    value={fieldOfStudy}
                    onChange={handleFieldOfStudyChange}
                    required
                />
            </div>

            <div className="mb-3 form-group">
                <label htmlFor="degree">Degree (selection - required)</label>
                <select
                    id="degree"
                    className="form-control"
                    value={degree}
                    onChange={handleDegreeChange}
                    required
                >
                    <option value="">Select a degree</option>
                    {degreeOptions.map((degreeOption) => (
                        <option key={degreeOption} value={degreeOption}>{degreeOption}</option>
                    ))}
                </select>
            </div>

            <div className="mb-3 form-group">
                <input
                    type="text"
                    className="form-control"
                    id="experience"
                    placeholder="Year of Experience (float - required)"
                    value={experience}
                    onChange={handleExperienceChange}
                    required
                />
            </div>

            <div className="mb-3 form-group">
                <label htmlFor="photo">Upload Photo (image/png, image/gif, image/jpeg - required)</label>
                <input
                    type="file"
                    id="photo"
                    className="form-control-file"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={handlePhotoChange}
                    required
                />
                {photoError && <div className="text-danger">{photoError}</div>}
            </div>

            <div className="mb-3 form-group">
                <label htmlFor="resume">Upload Resume (file/pdf - required)</label>
                <input
                    type="file"
                    id="resume"
                    className="form-control-file"
                    accept="application/pdf"
                    onChange={handleResumeChange}
                    required
                />
                {resumeError && <div className="text-danger">{resumeError}</div>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};
export default Form;
