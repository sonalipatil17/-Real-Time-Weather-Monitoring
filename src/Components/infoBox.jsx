import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../Style/infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600";
 
  let COLD_URL ="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  
  let HOT_URL ="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  let RAIN_URL ="https://images.unsplash.com/photo-1635850071245-07ad1deb3b21?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="Weather Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              City: {info.city} {
                info.humidity > 80
                  ? <ThunderstormIcon  />
                  : info.temp > 15
                  ? <SunnyIcon />
                  : <AcUnitIcon />
              }
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
              <p>Temp: {info.temp}°C</p>
              <p>Min: {info.tempMin}°C</p>
              <p>Max: {info.tempMax}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}°C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
