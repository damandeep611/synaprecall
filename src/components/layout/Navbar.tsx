import {FaGithub} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export default function Navbar(){
  return(
    <header className="flex items-center justify-between h-16 px-6">
      <div>
        <span className="text-xl font-bold">
          SynapR
        </span>
      </div>
      <nav className="flex items-center justify-between text-base font-semibold">
        <ul className="flex items-center justify-between gap-4">
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <a href="#">AI</a>
          </li>
          <li>
            <a href="#">Demo</a>
          </li>
        </ul>
      </nav>
      <div className=" flex items-center justify-between gap-4 text-sm font-semibold">
        <button className="bg-black text-white px-4 py-1 rounded-xl">Get Started</button>
        <button className="border border-black px-4 py-1 flex items-center justify-between gap-2 rounded-xl">
          <FaGithub/>
          Star on Github</button>
      </div>
    </header>
  )
}