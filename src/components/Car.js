import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import { mobil } from './Mobil';

function Car() {
  return (
    <Grid container spacing={2}>
      {mobil.map((car) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              src={`/images/${car.path}`}
              alt={car.nama}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car.nama}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Merk: {car.merek}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Warna: {car.warna}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tipe: {car.tipe}
              </Typography>
              <Button variant="contained">Lihat Detail</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Car;
