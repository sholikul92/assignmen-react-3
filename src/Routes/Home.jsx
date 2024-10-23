// TODO: answer here
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to='/student'>
        <button data-testid='student-btn'>All Student</button>
      </Link>
    </>
  ); // TODO: replace this
};

export default Home;
