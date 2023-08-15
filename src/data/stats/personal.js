import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2002-08-31T09:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 2,
    link:
      '"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3153.2681832579337!2d77.67559175542249!3d12.988574292356043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692044023291!5m2!1sen!2sin"',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Banglore, India',
  },
];

export default data;
