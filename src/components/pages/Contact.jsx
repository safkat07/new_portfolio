import React, { useState, useRef } from 'react';
import MaxWidthContainer from '../shared/MaxWidthContainer';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            email,
            message,
        };

        emailjs.send('service_aypw7gd', 'template_clq70ea', templateParams, 'Hpfgj7u6F4HmjE_no')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setErrorMessage('Failed to send message, please try again later.');
            });
    };

    return (
        <div id='contact' className="py-16">
            <MaxWidthContainer>
                <h2 className="text-4xl md:text-5xl text-white font-bold text-end mb-8">Contact Me</h2>
                <div className="max-w-lg mx-auto p-8 rounded-lg shadow-xl backdrop-blur-2xl">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                                rows="5"
                                placeholder="Your Message"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </button>
                        {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
                        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
                    </form>
                </div>
            </MaxWidthContainer>
        </div>
    );
};

export default Contact;
