import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(false);
  const [showCourse, setShowCourse] = useState(false);

  let blogComponent;
  if (showBlog) {
    blogComponent = <BlogDetails />;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Welcome to Blogger App</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => {
          setShowBook(true);
          setShowBlog(false);
          setShowCourse(false);
        }}>Show Book</button>

        <button onClick={() => {
          setShowBook(false);
          setShowBlog(true);
          setShowCourse(false);
        }} style={{ marginLeft: "10px" }}>Show Blog</button>

        <button onClick={() => {
          setShowBook(false);
          setShowBlog(false);
          setShowCourse(true);
        }} style={{ marginLeft: "10px" }}>Show Course</button>
      </div>

      {/* 1. Using if (with element variable) */}
      {blogComponent}

      {/* 2. Using ternary operator */}
      {showBook ? <BookDetails /> : null}

      {/* 3. Using logical AND (&&) */}
      {showCourse && <CourseDetails />}
    </div>
  );
}

export default App;
