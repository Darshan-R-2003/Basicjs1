import React from 'react';

const Card2 = ({ name, age, achievements,debut,fathersname,mothersname,profession }) => {

  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + '/images/download.jpeg'} alt="Profile" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <div>
        <p>Father's Name: {fathersname}</p>
        <p>Mother's Name: {mothersname}</p>
        <p>Profession: {profession}</p>
        <p>Debut: {debut}</p> 
        <p>Achievements: {achievements}</p>
      </div>
    </div>
  );
};

export default Card2;
