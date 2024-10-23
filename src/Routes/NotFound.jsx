// TODO: answer here
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <p className='font-bold text-4xl'>404 | Not Found</p>
      <button data-testid='back' onClick={back} className='bg-gray-700 text-white font-semibold rounded-xl py-2 px-6'>
        Back
      </button>
    </div>
  );
};

export default NotFound;
