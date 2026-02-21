import { useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/configFirebase';

const Register = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      //createUserWithEmailAndPassword recibe como argumentos el objeto de autenticación, el email y la contraseña
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', credential.user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mx-auto w-96 mt-24 border p-6 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-4'>Register</h1>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <label className='block text-md font-medium mb-1' htmlFor="email">Email</label>
          <input className="input w-full" type="email" id="email" ref={emailRef} required />
        </div>
        <div>
          <label className='block text-md font-medium mb-1' htmlFor="password">Password</label>
          <input className="input w-full" type="password" id="password" ref={passwordRef} required />
        </div>
        <button className='btn btn-primary w-full' type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
