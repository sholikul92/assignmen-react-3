// TODO: answer here
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className='flex justify-between px-8 py-2 bg-[#FFFFFF] fixed top-0 left-0 right-0'>
      <div>
        <Link to='/'>
          <h1 data-testid='home-page' className='font-bold text-lg'>
            Student Portal
          </h1>
        </Link>
      </div>
      <nav className='flex gap-4 text-gray-600'>
        <Link to='/student'>
          <button data-testid='student-page'>All Student</button>
        </Link>
        <Link to='/add'>
          <button data-testid='add-page'>Add Student</button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
