import React, { useState } from 'react';
import { checkEmail } from '../../utils/helpers';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
        console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
        const isValid = checkEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        }
        if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
        }
    };

    return (
        <section className="space-y-16 flex flex-col items-center ">
            <h1 className="font-bold text-6xl pt-12 text-lightGreen">Contact me</h1>
            <form className='w-full max-w-sm border border-lightGreen  p-4 bg-gradient-to-r from-ashGray to- border-4 gradient-lightGreen rounded-2xl shadow sm:p-10 md:p-8 dark:bg-gray-800 dark:border-lightGreen' id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label for="name" defaultValue={name} class="block mb-1 text-lg font-medium text-gunMetal dark:text-lightGreen">Name</label>
                    <input type="text" id="name" class="rounded-2xl mb-4 bg-gray-50 border border-gray-300 text-gunMetal text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required onBlur={handleChange}></input>
                </div>
                <div>
                    <label for="name" defaultValue={email} class="block mb-1 text-lg font-medium text-gunMetal dark:text-lightGreen">Email</label>
                    <input type="text" id="name" class="mb-4 bg-gray-50 border border-gray-300 text-gunMetal text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required onBlur={handleChange}></input>
                </div>
                <div>
                    <label for="name" defaultValue={message} class="block mb-1 text-lg font-medium text-gunMetal dark:text-lightGreen">Message</label>
                    <input type="text" id="name" class="mb-4 bg-gray-50 border border-gray-300 text-gunMetal text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-red dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message" required onBlur={handleChange}></input>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="text-3xl text-lightGreen hover:text-darkGreen active:text-redWood focus:ring-redWood"one>Submit</button>
            </form>
        </section>
    );
}
