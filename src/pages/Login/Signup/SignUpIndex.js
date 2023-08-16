



import React, { useState } from 'react';
import Footer from '../Footer';



function SignUpIndex() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add code this
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <div>
                <h1>Sign in</h1>
                <form action='Post'>

                    <label>Email or mobile phone number</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    >
                    </input>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    >
                    </input>
                </form>
                <Footer />
            </div>




        </>
    )
}



export default SignUpIndex;