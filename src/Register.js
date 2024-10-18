import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from './bioskop-background.jpeg'; // Import the image
const Register = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported variable
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex items-center justify-center min-h-screen bg-black bg-opacity-50"
    >
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-6">
          <FontAwesomeIcon icon={faFilm} className="text-4xl text-white" />
          <h1 className="text-3xl font-bold text-white mt-2">CHILL</h1>
        </div>
        <h2 className="text-2xl font-semibold text-white text-center mb-2">Daftar</h2>
        <p className="text-gray-400 text-center mb-6">Selamat datang!</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1" htmlFor="username">Username</label>
            <input
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="text"
              id="username"
              placeholder="Masukkan username"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-400 mb-1" htmlFor="password">Kata Sandi</label>
            <input
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="password"
              id="password"
              placeholder="Masukkan kata sandi"
            />
            <FontAwesomeIcon icon={faEye} className="absolute right-3 top-10 text-gray-400 cursor-pointer" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-400 mb-1" htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
            <input
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="password"
              id="confirm-password"
              placeholder="Masukkan kata sandi"
            />
            <FontAwesomeIcon icon={faEye} className="absolute right-3 top-10 text-gray-400 cursor-pointer" />
          </div>
          <div className="text-gray-400 mb-4">
            Sudah punya akun? <a href="#" className="text-blue-500">Masuk</a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 mb-4"
          >
            Daftar
          </button>
          <div className="text-center text-gray-400 mb-4">Atau</div>
          <button
            type="button"
            className="w-full py-2 bg-gray-700 text-white rounded-lg flex items-center justify-center hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Daftar dengan Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;