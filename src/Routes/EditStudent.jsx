// TODO: answer here
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
  // TODO: answer here
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [faculty, setFaculty] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const getStudentWithId = (id) => {
    fetch(`http://localhost:3001/student/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getStudentWithId(id);
  }, [id]);

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
    chooseFaculty(student.programStudy);
  }, [student.programStudy]);

  const EditStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...student,
          faculty,
        }),
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await EditStudent(id);
    navigate('/student');
  };

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Navbar />
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <section className='bg-[#F6F8FD] flex justify-center items-center h-screen mt-8'>
          <form
            data-testid='form-student'
            className='flex gap-4 flex-col bg-white max-w-2xl w-full p-4 h-max rounded-xl shadow-md justify-center'
            onSubmit={handleFormSubmit}
          >
            <img src={student.profilePicture} alt='profile' className='w-40 self-center rounded-lg' />

            <input
              type='text'
              data-testid='name'
              name='input-name'
              id='input-name'
              value={student.fullname}
              className=' border-2 p-2 rounded-full pl-2'
              onChange={(e) => setStudent({ ...student, fullname: e.target.value })}
              required
            />

            <input
              type='text'
              data-testid='profilePicture'
              name='profilePicture'
              id='input-profilePicture'
              value={student.profilePicture}
              className='border-2 p-2 rounded-full pl-2'
              onChange={(e) => setStudent({ ...student, profilePicture: e.target.value })}
              required
            />

            <input
              type='text'
              data-testid='address'
              name='address'
              id='input-address'
              value={student.address}
              className=' border-2 p-2 rounded-full pl-2'
              onChange={(e) => setStudent({ ...student, address: e.target.value })}
              required
            />

            <input
              type='text'
              data-testid='phoneNumber'
              name='phoneNumber'
              id='input-phoneNumber'
              value={student.phoneNumber}
              className='border-2 p-2 rounded-full pl-2'
              onChange={(e) => setStudent({ ...student, phoneNumber: e.target.value })}
              required
            />

            <input
              type='date'
              data-testid='date'
              name='birthDate'
              id='input-birthDate'
              value={student.birthDate}
              className=' border-2 p-2 rounded-full pl-2'
              onChange={(e) => setStudent({ ...student, birthDate: e.target.value })}
              required
            />

            <select
              id='input-gender'
              data-testid='gender'
              className='bg-white border-2 p-2 rounded-full'
              onChange={(e) => setStudent({ ...student, gender: e.target.value })}
              value={student.gender}
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
              onChange={(e) => setStudent({ ...student, programStudy: e.target.value })}
              value={student.programStudy}
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
            <input type='submit' value='Edit Student' data-testid='edit-btn' className='bg-blue-500 text-white p-2 rounded-full font-semibold mt-4' />
          </form>
        </section>
      )}
    </>
  );
};

export default EditStudent;
