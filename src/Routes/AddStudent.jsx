// TODO: answer here
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const AddStudent = () => {
  // TODO: answer here,
  const [formStudent, setFormStudent] = useState({
    fullName: '',
    profilePicture: '',
    address: '',
    phoneNumber: '',
    dateBirth: '',
    gender: '',
    prody: '',
  });
  const [faculty, setFaculty] = useState('');

  const chooseFaculty = (prody) => {
    switch (prody) {
      case 'Ekonomi':
      case 'Manajemen':
      case 'Akuntansi':
        setFaculty('Fakultas Ekonomi');
        break;
      case 'Administrasi Publik':
      case 'Administrasi Bisnis':
      case 'Hubungan Internasional':
        setFaculty('Fakultas Ilmu Sosial dan Politik');
        break;
      case 'Teknik Sipil':
      case 'Arsitektur':
        setFaculty('Fakultas Teknik');
        break;
      case 'Matematika':
      case 'Fisika':
      case 'Informatika':
        setFaculty('Fakultas Teknologi Informasi dan Sains');
        break;

      default:
        setFaculty('');
    }
  };

  useEffect(() => {
    chooseFaculty(formStudent.prody);
  }, [formStudent.prody]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formStudent);
    console.log(faculty);
  };

  return (
    <>
      <Navbar />
      <main className='bg-[#F6F8FD] h-screen flex justify-center items-center p-4'>
        <form
          data-testid='form-student'
          className='flex gap-4 flex-col bg-white max-w-2xl w-full p-4 h-max rounded-xl shadow-md'
          onSubmit={handleFormSubmit}
        >
          <h2 className='font-bold text-2xl text-center'>Form Student</h2>

          <input
            type='text'
            data-testid='name'
            name='input-name'
            id='input-name'
            placeholder='full name'
            className=' border-2 p-2 rounded-full pl-2'
            onChange={(e) => setFormStudent({ ...formStudent, fullName: e.target.value })}
            required
          />

          <input
            type='text'
            data-testid='profilePicture'
            name='profilePicture'
            id='input-profilePicture'
            placeholder='Profile Picture'
            className='border-2 p-2 rounded-full pl-2'
            onChange={(e) => setFormStudent({ ...formStudent, profilePicture: e.target.value })}
            required
          />

          <input
            type='text'
            data-testid='address'
            name='address'
            id='input-address'
            placeholder='Address'
            className=' border-2 p-2 rounded-full pl-2'
            onChange={(e) => setFormStudent({ ...formStudent, address: e.target.value })}
            required
          />

          <input
            type='number'
            data-testid='phoneNumber'
            name='phoneNumber'
            id='input-phoneNumber'
            placeholder='Phone Number'
            className='border-2 p-2 rounded-full pl-2'
            onChange={(e) => setFormStudent({ ...formStudent, phoneNumber: e.target.value })}
            required
          />

          <input
            type='date'
            data-testid='date'
            name='birthDate'
            id='input-birthDate'
            placeholder='Birth Date'
            className=' border-2 p-2 rounded-full pl-2'
            onChange={(e) => setFormStudent({ ...formStudent, dateBirth: e.target.value })}
            required
          />

          <select
            id='input-gender'
            data-testid='gender'
            className='bg-white border-2 p-2 rounded-full'
            onChange={(e) => setFormStudent({ ...formStudent, gender: e.target.value })}
            required
          >
            <option value='' disabled selected hidden>
              Gender
            </option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>

          <select
            id='input-prody'
            data-testid='prody'
            className='bg-white border-2 p-2 rounded-full'
            onChange={(e) => setFormStudent({ ...formStudent, prody: e.target.value })}
            required
          >
            <option value='' disabled selected hidden>
              Program Study
            </option>
            <option value='Ekonomi'>Ekonomi</option>
            <option value='Manajemen'>Manajemen</option>
            <option value='Akuntansi'>Akuntansi</option>
            <option value='Administrasi Publik'>Administrasi Publik</option>
            <option value='Administrasi Bisnis'>Administrasi Bisnis</option>
            <option value='Hubungan Internasional'>Hubungan Internasional</option>
            <option value='Teknik Sipil'>Teknik Sipil</option>
            <option value='Arsitektur'>Arsitektur</option>
            <option value='Matematika'>Matematika</option>
            <option value='Fisika'>Fisika</option>
            <option value='Informatika'>Informatika</option>
          </select>
          <input type='submit' value='Add Student' data-testid='add-btn' className='bg-blue-500 text-white p-2 rounded-full font-semibold mt-4' />
        </form>
      </main>
    </>
  );
};

export default AddStudent;
