import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const API = 'http://20.244.56.144/train/';

function Reg() {
    const [userData, setUserData] = useState({
        rollnumber: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({...userData, [name]: value});
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post(`${API}register`, userData);

            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Registration error:', error);
        }
    };
    return (
        <div>
            <h1>User Registration</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="rollnumber">Roll Number:</label>
                    <input
                        type="text"
                        id="rollnumber"
                        name="rollnumber"
                        value={userData.rollnumber}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Reg;
