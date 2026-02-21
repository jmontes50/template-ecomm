import { useRef } from 'react';

const Register = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log('Email:', email);
    console.log('Password:', password);
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
