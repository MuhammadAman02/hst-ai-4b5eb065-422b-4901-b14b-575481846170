import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="text-center animate-fade-in">
        <h1 className="hello-world mb-4">Hello World</h1>
        <p className="text-xl text-gray-600">Welcome to your simple and beautiful React app!</p>
      </div>
    </div>
  );
};

export default Index;