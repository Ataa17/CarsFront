import axios from 'axios';
import { useEffect, useState } from 'react';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/cars/')
      .then(response => setCars(response.data))
      .catch(error => console.error(error));
  }, []);
  console.log(cars);

  return (
    <div>
      <h1>Available Cars</h1>
      {cars.map(car => (
        <div key={car.id}>
          <h2>{car.brand}</h2>
          <p>{car.color}</p>
        </div>
      ))}
    </div>
  );
};

export default CarList;