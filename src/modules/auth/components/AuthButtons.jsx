import { useState } from 'react';

export const AuthButtons = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm">Usuario Demo</span>
        <button onClick={handleLogout} className="btn btn-sm btn-outline">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <button onClick={handleLogin} className="btn btn-sm btn-primary">
        Login
      </button>
      <button className="btn btn-sm btn-ghost">
        Register
      </button>
    </div>
  );
};
