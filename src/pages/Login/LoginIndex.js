import React, { useState } from 'react';

import Footer from './Footer';


import LogoW from './LogoW.png';


function LoginIndex() {

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
            <div className='LoginCol'>
                <img src={LogoW} className='' alt='Logo' />
                <div className='LoginBox'>
                    <h1>Sign in</h1>
                    <form>

                        <label>Type Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        >
                        </input>
                        <input type='submit' onClick={handleSubmit}>Continue</input>
                        <p>By continuing, you agree to<a href='#'>Amazon's Conditions of Use</a> and <a href='#'>Privacy Notice.</a></p>
                    </form>
                </div>
                <div>
                    <hr></hr>
                    <p>New to Amazon?</p>
                    <hr></hr>
                </div>
                <button>Create your Amazon account</button>
            </div>
            <Footer />

        </>
    )
}



export default LoginIndex;