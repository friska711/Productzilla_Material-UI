import React, { useState } from 'react';
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem, OutlinedInput, ListItemText, Checkbox, IconButton, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { mobil } from './Mobil';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMerek, setSelectedMerek] = useState([]);
  const [selectedTipe, setSelectedTipe] = useState([]);
  const [selectedWarna, setSelectedWarna] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      filterCars();
    }
  };

  const handleFilter = () => {
    filterCars();
  };

  const handleMerekChange = (event) => {
    setSelectedMerek(event.target.value);
  };

  const handleTipeChange = (event) => {
    setSelectedTipe(event.target.value);
  };

  const handleWarnaChange = (event) => {
    setSelectedWarna(event.target.value);
  };

  const filterCars = () => {
    const filteredCars = mobil.filter((car) =>
      car.nama.toLowerCase().includes(searchTerm) &&
      (selectedMerek.length === 0 || selectedMerek.includes(car.merek)) &&
      (selectedTipe.length === 0 || selectedTipe.includes(car.tipe)) &&
      (selectedWarna.length === 0 || selectedWarna.includes(car.warna))
    );
    setFilteredCars(filteredCars);
  };

  const [filteredCars, setFilteredCars] = useState([]);

  return (
    <div>
      <Typography variant="h4" color="primary" gutterBottom>
        Cari Mobil Impian Anda
      </Typography>
      <Box mb={2}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleFilter}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="merek-label">Merek</InputLabel>
            <Select
              labelId="merek-label"
              id="merek-checkbox"
              multiple
              value={selectedMerek}
              onChange={handleMerekChange}
              input={<OutlinedInput label="Merek" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {mobil.map((car) => (
                <MenuItem key={car.merek} value={car.merek}>
                  <Checkbox checked={selectedMerek.includes(car.merek)} />
                  <ListItemText primary={car.merek} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="tipe-label">Tipe</InputLabel>
            <Select
              labelId="tipe-label"
              id="tipe-checkbox"
              multiple
              value={selectedTipe}
              onChange={handleTipeChange}
              input={<OutlinedInput label="Tipe" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {mobil.map((car) => (
                <MenuItem key={car.tipe} value={car.tipe}>
                  <Checkbox checked={selectedTipe.includes(car.tipe)} />
                  <ListItemText primary={car.tipe} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="warna-label">Warna</InputLabel>
            <Select
              labelId="warna-label"
              id="warna-checkbox"
              multiple
              value={selectedWarna}
              onChange={handleWarnaChange}
              input={<OutlinedInput label="Warna" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {mobil.map((car) => (
                <MenuItem key={car.warna} value={car.warna}>
                  <Checkbox checked={selectedWarna.includes(car.warna)} />
                  <ListItemText primary={car.warna} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {filteredCars.map((car) => (
          <Grid key={car.id} item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={car.nama}
                height="140"
                image={`/images/${car.path}`}
              />
              <CardContent>
                <Typography variant="h6">{car.nama}</Typography>
                <Typography variant="subtitle1">{car.merek}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Tipe: {car.tipe}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Warna: {car.warna}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchBar;
