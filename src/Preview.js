import React from 'react';
import { useLocation } from 'react-router-dom';
import './Preview.css'; 

const Preview = () => {
    const location = useLocation();
    const { name, email, phone, Short_Introduction, age, city, fieldOfStudy, degree, experience } = location.state;

    return (
        <div className="preview-container">
            <h1>This is your data</h1>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Introduction</th>
                        <th scope="col">Age</th>
                        <th scope="col">City</th>
                        <th scope="col">Field of Study</th>
                        <th scope="col">Degree</th>
                        <th scope="col">Experience</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td>{Short_Introduction}</td>
                        <td>{age}</td>
                        <td>{city}</td>
                        <td>{fieldOfStudy}</td>
                        <td>{degree}</td>
                        <td>{experience}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Preview;
