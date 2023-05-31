import React, { useState } from 'react';
import { Container } from '@mui/material';
import Car from './components/Car';
import SearchBar from './components/SearchBar';
import { mobil } from './components/Mobil';
function App() {
  const [filteredCars, setFilteredCars] = useState([]);

  return (
    <Container maxwidth="lg">
      <div>
      <SearchBar setFilteredCars={setFilteredCars} />
      {filteredCars.length > 0 ? (
        <Car cars={filteredCars} />
      ) : (
        <Car cars={mobil} />
      )}
    </div>

    </Container>
  );
}

export default App;
