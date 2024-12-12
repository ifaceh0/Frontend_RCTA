
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the type for each course
interface Course {
  id: number;
  title: string;
  duration: string;
}

// Define the state type for the Classes component
interface ClassesState {
  courses: Course[];
}

// Functional Component Wrapper to use `useNavigate`
const Classes: React.FC = () => {
  const navigate = useNavigate();

  // Define course data
  const courses: Course[] = [
    { id: 1, title: 'Tennis Foundations (for beginners)', duration: '100 hours' },
    { id: 2, title: 'Rally Ready (for intermediate)', duration: '300 hours' },
    { id: 3, title: 'Game Mastery (for advanced)', duration: '100 hours' },
    { id: 4, title: 'Swing and Sweat (cardio-Focused)', duration: '300 hours' },
    { id: 5, title: 'Group Clinic (for adults)', duration: '100 hours' },
    { id: 6, title: 'Junior Aces (for kids & teens)', duration: '100 hours' },
    { id: 7, title: 'Private Lesson', duration: '300 hours' },
    { id: 8, title: 'Semi-Private Lesson', duration: '300 hours' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header Section */}
      <header className="text-center mb-12 mt-16">
        <h1 className="text-4xl font-extrabold text-gray-900">Classes</h1>
        <p className="text-gray-700 text-lg mt-2">Explore the classes to learn and grow.</p>
      </header>

      {/* Courses Grid Section */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg shadow-blue-400 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            {/* Course Image */}
            <div className="flex justify-center p-6 bg-gray-100">
              <img
                src="/tennisclass.jpg"
                alt="Course Illustration"
                className="w-40 h-20 object-contain"
              />
            </div>

            {/* Course Details */}
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{course.duration}</p>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
                onClick={() => navigate(`/coursepage/${course.id}`)}
              >
                Get Sessions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;


