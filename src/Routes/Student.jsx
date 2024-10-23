// TODO: answer here
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';

const Student = () => {
  // TODO: answer here
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [optionFaculty, setOptionFaculty] = useState('All');
  const [studentWithFilter, setStudentWithFilter] = useState([]);

  const url = 'http://localhost:3001/student';

  const getStudent = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    getStudent();
  }, []);

  useEffect(() => {
    if (optionFaculty === 'All') {
      setStudentWithFilter(students);
    } else {
      setStudentWithFilter(students.filter((student) => student.faculty === optionFaculty));
    }
  }, [optionFaculty, students]);

  const deleteStudent = (id) => {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        getStudent();
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Navbar />
      <main className='bg-[#F6F8FD] p-8 min-h-screen mt-8'>
        <div className='flex justify-between mx-10 mb-6'>
          <h2 className='text-xl'>All Student</h2>
          <select data-testid='filter' className='bg-white p-2 rounded-lg' onChange={(e) => setOptionFaculty(e.target.value)}>
            <option value='All'>All</option>
            <option value='Fakultas Ekonomi'>Fakultas Ekonomi</option>
            <option value='Fakultas Ilmu Sosial dan Politik'>Fakultas Ilmu Sosial dan Politik</option>
            <option value='Fakultas Teknik'>Fakultas Teknik</option>
            <option value='Fakultas Teknologi Informasi dan Sains'>Fakultas Teknologi Informasi dan Sains</option>
          </select>
        </div>
        {loading ? (
          <p className='font-semibold text-4xl'>Loading ...</p>
        ) : (
          <div className='bg-[#ffffff] shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10'>
            <table id='table-student' className='w-full table-fixed'>
              <thead>
                <tr>
                  <th className='w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase'>No</th>
                  <th className='w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase'>Full Name</th>
                  <th className='w-1/2 py-4 px-6 text-left text-gray-600 font-bold uppercase'>Faculty</th>
                  <th className='w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase'>Program Study</th>
                  <th className='w-1/6 py-4 px-6 text-left text-gray-600 font-bold uppercase'>Option</th>
                </tr>
              </thead>
              <tbody>
                {studentWithFilter?.map((student, index) => {
                  return (
                    <tr key={student.id} className='student-data-row'>
                      <td className='py-4 px-6 border-b border-gray-200'>{index + 1}</td>
                      <td className='py-4 px-6 border-b border-gray-200'>
                        <Link to={'/student/' + student.id}>{student.fullname}</Link>
                      </td>
                      <td className='py-4 px-6 border-b border-gray-200'>{student.faculty}</td>
                      <td className='py-4 px-6 border-b border-gray-200'>{student.programStudy}</td>
                      <td className='py-4 px-6 border-b border-gray-200'>
                        <button data-testid={'delete-' + student.id} className='text-red-700 font-semibold' onClick={() => deleteStudent(student.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
};

export default Student;
