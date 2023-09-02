import { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const fullName = firstName + " " + lastName;

  var templateParams = {
    from_name: fullName,
    reply_to: emailAddress,
    message: message,
  };

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_1pzfzf9', 'template_oxvqwrr', templateParams, '-iUwA8BfXzqe4ipwe')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Email sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setFirstName('');
        setLastName('');
        setEmailAddress('');
        setMessage('');
      }, function(error) {
        console.log('FAILED...', error);
        toast.error('Error sending Email. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
      .finally(() => setLoading(false));
    
  }

  return (
    <motion.section id='contact' className='flex flex-col h-full w-full py-20 justify-center items-center bg-primary'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <HeaderTitle title="Let's talk" />
      <form className='flex flex-col w-1/3 m-20 bg-white p-14 drop-shadow-md shadow-[0_10px_16px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]' onSubmit={sendEmail}>
        <div className='flex gap-10'>
          <span className="flex flex-col w-1/2">
            <label className='font-medium'>First Name</label>
            <input type="text" className='border-b-2 border-[#eae0da] p-3 focus:outline-0 focus:border-b-2 focus:border-black hover:border-b-2 hover:border-black' maxLength='20' onChange={e => {setFirstName(e.target.value)}} value={firstName} required />
          </span>
          <span className="flex flex-col w-1/2">
            <label className='font-medium'>Last Name</label>
            <input type="text" className='border-b-2 border-[#eae0da] p-3 focus:outline-0 focus:border-b-2 focus:border-black hover:border-b-2 hover:border-black' maxLength='20' onChange={e => {setLastName(e.target.value)}} value={lastName} required />
          </span>
        </div>        
        <label className='mt-16 font-medium'>Email</label>
        <input type="email" className='border-b-2 border-[#eae0da] p-3 focus:outline-0 focus:border-b-2 focus:border-black hover:border-b-2 hover:border-black' onChange={e => {setEmailAddress(e.target.value)}} value={emailAddress} required />
        <label className='mt-16 font-medium'>Message</label>
        <textarea rows='4' className='border-b-2 border-[#eae0da] p-3 focus:outline-0 focus:border-b-2 focus:border-black hover:border-b-2 hover:border-black resize-none' onChange={e => {setMessage(e.target.value)}} value={message} />
        {loading ?
        <div role="status">
          <svg aria-hidden="true" className="mt-5 w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        </div> :
        <input type="submit" value='SEND' disabled={loading} className='cursor-pointer mt-5 rounded-full bg-tertiary text-white font-medium py-2 w-32 text-sm ease-in duration-300 border border-tertiary hover:text-tertiary hover:bg-white hover:border-sky-800' />
        }
      </form>
    </motion.section>
  )
}

export default Contact