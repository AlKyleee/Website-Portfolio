import { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const fullName = firstName + " " + lastName;

  var templateParams = {
    from_name: fullName,
    reply_to: emailAddress,
    message: message,
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs.send('service_1pzfzf9', 'template_oxvqwrr', templateParams, '-iUwA8BfXzqe4ipwe')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
    setFirstName('');
    setLastName('');
    setEmailAddress('');
    setMessage('');
  }

  return (
    <motion.section id='contact' className='flex flex-col h-full w-full py-20 justify-center items-center bg-primary'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <HeaderTitle title="Let's talk" />
      <form className='flex flex-col w-1/3 m-20 bg-white p-14' onSubmit={sendEmail}>
        <div className='flex gap-10'>
          <span className="flex flex-col w-1/2">
            <label className='font-medium'>First Name</label>
            <input type="text" className='border-b p-3 focus:outline-0 focus:border-b-2 focus:border-black hover:border-b-2 hover:border-black' maxLength='20' onChange={e => {setFirstName(e.target.value)}} value={firstName} required />
          </span>
          <span className="flex flex-col w-1/2">
            <label className='font-medium'>Last Name</label>
            <input type="text" className='border-b p-3 focus:outline-0 focus:border-b-2 focus:border-black hover:border-b-2 hover:border-black' maxLength='20' onChange={e => {setLastName(e.target.value)}} value={lastName} required />
          </span>
        </div>        
        <label className='mt-16 font-medium'>Email</label>
        <input type="email" className='border-b p-3 focus:outline-0 focus:border-b-2 focus:border-black hover:border-b-2 hover:border-black' onChange={e => {setEmailAddress(e.target.value)}} value={emailAddress} required />
        <label className='mt-16 font-medium'>Message</label>
        <textarea rows='4' className='border-b p-3 focus:outline-0 focus:border-b-2 focus:border-black hover:border-b-2 hover:border-black resize-none' onChange={e => {setMessage(e.target.value)}} value={message} />
        <input type="submit" value="SEND" className='cursor-pointer mt-5 rounded-full bg-tertiary text-white font-medium py-2 w-32 text-sm ease-in duration-300 border border-tertiary hover:text-tertiary hover:bg-white hover:border-sky-800' />
      </form>
      

    </motion.section>
  )
}

export default Contact