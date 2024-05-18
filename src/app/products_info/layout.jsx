// components/NewLayout.js
import React from 'react';


const NewLayout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default NewLayout;