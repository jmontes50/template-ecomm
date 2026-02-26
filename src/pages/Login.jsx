import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/configFirebase';
import { toast } from 'react-toastify';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      toast.success('Logged in successfully!', { theme: "dark" });
      navigate('/'); // Redirige al usuario a la página de inicio después de iniciar sesión
    } catch (error) {
      console.error('Error signing in:', error);
      toast("Error logging in: " + error.message, { type: "error", autoClose: 5000, theme: "dark" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="block text-md font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                ref={emailRef}
                required
              />
            </div>

            <div className="form-control">
              <label className="block text-md font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                ref={passwordRef}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-6">
              Login
            </button>
          </form>

          <div className="text-center text-sm mt-4">
            Don't have an account?{' '}
            <Link to="/register" className="link link-primary">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
