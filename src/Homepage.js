// Import library yang dibutuhkan
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

// Komponen Header
function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">CHILL</div>
        <nav className="space-x-4">
          <a className="hover:text-gray-400" href="#"> Home </a>
          <a className="hover:text-gray-400" href="#"> Series </a>
          <a className="hover:text-gray-400" href="#"> Films </a>
          <a className="hover:text-gray-400" href="#"> Daftar Seri </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
    </header>
  );
}

// Komponen Banner
function Banner() {
  return (
    <section className="relative mb-8">
      <img
        alt="Duty After School banner"
        className="w-full h-64 object-cover rounded-lg"
        height="400"
        src="/movie/movie-1.jpg"
        width="1200"
      />
      <div className="absolute bottom-4 left-4">
        <h1 className="text-3xl font-bold">Duty After School</h1>
        <p className="mt-2 max-w-lg">
          Sekolah tinggi diserang oleh alien. Ketika keadaan semakin buruk,
          para siswa harus berjuang untuk bertahan hidup.
        </p>
        <div className="mt-4 flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 rounded-lg">Mulai</button>
          <button className="px-4 py-2 bg-gray-700 rounded-lg">
            Selengkapnya
          </button>
          <button className="px-4 py-2 bg-gray-700 rounded-lg">18+</button>
          <input type="range" id="volume" min="0" max="100" value="50" />
          <label htmlFor="volume">Volume</label>
        </div>
      </div>
    </section>
  );
}

// Komponen Film
function Film({ title, image }) {
  return (
    <img
      alt={title}
      className="w-full h-48 object-cover rounded-lg"
      height="300"
      src={image}
      width="200"
    />
  );
}

// Komponen Main
function Main() {
  return (
    <main className="p-4">
      <Banner />
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Melanjutkan Tonton Film</h2>
        <div className="flex space-x-4 overflow-x-auto">
          <Film title="Film 1" image="movie/movie-2.jpg" />
          <Film title="Film 2" image="movie/movie-3.jpeg" />
          <Film title="Film 3" image="movie/movie-4.jpeg" />
          <Film title="Film 4" image="movie/movie-5.jpeg" />
          <Film title="Film 5" image="movie/movie-6.jpeg" />
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Top Rating Film dan Series Hari ini
        </h2>
        <div className="grid grid-cols-5 gap-4">
          <Film title="Top Rating Film 1" image="movie/movie-7.jpeg" />
          <Film title="Top Rating Film 2" image="movie/movie-8.jpeg" />
          <Film title="Top Rating Film 3" image="movie/movie-9.jpeg" />
          <Film title="Top Rating Film 4" image="movie/movie-10.jpeg" />
          <Film title="Top Rating Film 5" image="movie/movie-11.jpeg" />
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2 xl font-bold mb-4">Film Trending</h2>
        <div className="grid grid-cols-5 gap-4">
          <Film title="Trending Film 1" image="movie/movie-12.jpeg" />
          <Film title="Trending Film 2" image="movie/movie-11.jpeg" />
          <Film title="Trending Film 3" image="movie/movie-13.jpeg" />
          <Film title="Trending Film 4" image="movie/movie-14.jpeg" />
          <Film title="Trending Film 5" image="movie/movie-15.jpeg" />
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Rilis Baru</h2>
        <div className="grid grid-cols-5 gap-4">
          <Film title="New Release 1" image="movie/movie-15.jpeg" />
          <Film title="New Release 2" image="movie/movie-16.jpeg" />
          <Film title="New Release 3" image="movie/movie-17.jpeg" />
          <Film title="New Release 4" image="movie/movie-18.jpeg" />
          <Film title="New Release 5" image="movie/movie-19.jpeg" />
        </div>
      </section>
    </main>
  );
}

// Komponen Footer
function Footer() {
  return (
    <footer className="p-4 bg-gray-800">
      <div className="flex justify-between">
        <div className="text-lg font-bold">CHILL</div>
        <div className="space-x-4">
          <a className="hover:text-gray-400" href="#"> About </a>
          <a className="hover:text-gray-400" href="#"> Help Center </a>
          <a className="hover:text-gray-400" href="#"> Terms of Use </a>
          <a className="hover:text-gray-400" href="#"> Privacy Policy </a>
          <a className="hover:text-gray-400" href="#"> Cookie Preferences </a>
          <a className="hover:text-gray-400" href="#"> Corporate Information </a>
        </div>
      </div>
      <div className="mt-4 text-gray-500">© 2023 CHILL, All Rights Reserved.</div>
    </footer>
  );
}

// Komponen App
function App() {
  return (
    <div className="bg-gray-900 text-white font-roboto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;