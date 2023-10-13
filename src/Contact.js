import { useRef } from "react";
import emailjs from '@emailjs/browser'; 

import bg from './images/background.jpg'

require('dotenv').config();

const Contact = () => {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return ( 
    <div className="contact min-h-screen flex flex-col justify-center items-center">
        <div className="mt-auto drop-shadow-xl">
            <form ref={form} onSubmit={sendEmail} className="p-5 w-96 rounded-xl bg-white grid grid-cols-1">
                <h1 className="mb-3 text-center text-3xl font-bold">Contact Me!</h1>
                <div className="mb-3 w-full grid grid-cols-1">
                    <label className="mb-2 font-bold">Name:</label>
                    <input className="border-2 border-black rounded-lg px-2 py-1" type="text" name="user_name" />
                </div>
                <div className="mb-3 w-full grid grid-cols-1">
                    <label className="mb-2 font-bold">Email:</label>
                    <input className="border-2 border-black rounded-lg px-2 py-1" type="email" name="user_email" />    
                </div>
                <div className="mb-3 grid grid-cols-1">
                    <label className="mb-2 font-bold">Message:</label>
                    <textarea className="border-2 border-black rounded-lg px-2 py-1" name="message" />   
                </div>
                <div className="p-2 ml-auto mr-auto w-fit rounded-xl drop-shadow-LG hover:bg-blue-400 hover:cursor-pointer bg-blue-500 text-orange-50 text-center flex gap-2">
                    <button type="submit" value="Send">Send</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </div>
            </form>
        </div>
        <div className="mt-auto mb-3 flex justify-center items-center">
            <p className="drop-shadow-xl text-black">Raiyan Samin 2023</p>
        </div>
    </div> 
    
  );
}
 
export default Contact;