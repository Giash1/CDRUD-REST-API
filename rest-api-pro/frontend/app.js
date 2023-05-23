// app.js

// for students
const stContainer = document.getElementById('stdetails');

// Fetch student details from the backend API
fetch('/api/students')
  .then(response => response.json())
  .then(data => {
    // Process and display the details using map and join methods
    const students = data.map(student => `<p>${student.name}: ${student.email}: ${student.age}</p>`);
    stContainer.innerHTML = students.join('');
  })
  .catch(error => {
    console.error('Error:', error);
  });

//   for teachers
const teContainer = document.getElementById('tedetails');

// Fetch details details from the backend API
fetch('/api/teachers')
  .then(response => response.json())
  .then(data => {
    // Process and display the teachers details using map and 
    const teachers = data.map(teacher => `<p>${teacher.name}: ${teacher.email}: ${teacher.age}: ${teacher.subject}</p>`);
    teContainer.innerHTML = teachers.join('');
  })
  .catch(error => {
    console.error('Error:', error);
  });
