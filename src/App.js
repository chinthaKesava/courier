import React from 'react';
import './App.css';


import AllProduct from './Components/AllProductsSection';

const App = () => {
  

  // Define the function to handle file upload
  

  return (
    <div className="App">
      <h1>File Upload Example</h1>
      {/* Pass the handleFileUpload function as a prop to ImageUpload */}
      
      {/* Render the uploaded file if available */}
      <AllProduct/>
    </div>
  );
};

export default App;
