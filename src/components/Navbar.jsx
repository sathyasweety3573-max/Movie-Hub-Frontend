import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-700 py-4 text-center">
      
        <h1 className="text-3xl font-bold text-white tracking-widest mb-3">
          🎬 MovieApp
        </h1>
      <div className="flex justify-center gap-6 text-white">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;