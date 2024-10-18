import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import backgroundImage from './bioskop-background.jpeg'; // Import the image

const ChillMovieFSD = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-75"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported variable
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <i className="fas fa-film text-4xl text-white"></i>
          <h1 className="text-3xl font-bold text-white mt-2">CHILL</h1>
        </div>
        <h2 className="text-xl font-semibold text-white text-center mb-2">Masuk</h2>
        <p className="text-gray-400 text-center mb-6">Selamat datang kembali!</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1" htmlFor="username">Username</label>
            <input
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="username"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1" htmlFor="password">Kata Sandi</label>
            <div className="relative">
              <input
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-blue-500">Belum punya akun? Daftar</a>
            <a href="#" className="text-blue-500">Lupa kata sandi?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          >
            Masuk
          </button>
          <div className="text-center text-gray-400 mb-4">Atau</div>
          <button
            type="button"
            className="w-full bg-white text-gray-800 py-2 rounded-lg flex items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <i className="fab fa-google text-xl mr-2"></i> Masuk dengan Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChillMovieFSD;