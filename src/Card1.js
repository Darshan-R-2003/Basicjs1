import React from 'react';

const Card1 = ({ name, age }) => {
  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + '/images/Photo.jpg'} alt="Profile" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default Card1;

