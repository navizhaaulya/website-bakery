import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar py-4 flex items-center justify-between bg-amber-950 text-slate-100">
      <div className="logo">
        <h1 className="title ml-10 font-bold text-2xl">Alzam B'Cookies</h1>
      </div>
      <ul className="Menu flex items-center gap-7 mr-6 font-semibold text-slate-100">
        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Product</a>
        </li>

        <li>
          <a href="#">Testimonial</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>

        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar