import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../Style/Searchbox.css";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "79d3dcc6d039773ff5ef1a2b0569a7fd";

export default function Searchbox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      const jsonResponse = await response.json();

      if (!response.ok) {
        throw new Error("No such place");
      }

      return {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
    } catch (err) {
      setError(true);
      throw err;
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
    setError(false);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="Searchbox">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row">
          <TextField
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
          {error && <p style={{ color: "red" }}>No such place exists</p>}
        </Stack>
      </form>
    </div>
  );
}
