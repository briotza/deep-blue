import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Clima: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [cityId, setCityId] = useState(3477); // ID para São Paulo
  const [error, setError] = useState<string>('');

  // Substitua pelo seu token da API
  const apiToken = '29bb4c0d60b0136dd4979b60c1a21ea7';

  // Função para obter os dados de clima
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/clima/${cityId}`);

      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('Erro ao buscar dados do tempo.');
      setWeatherData(null);
    }
  };

  // Efeito para carregar os dados do clima
  useEffect(() => {
    fetchWeatherData();
  }, [cityId]);

  return (
    <div className="weather-container">
      <h2>Previsão do Tempo</h2>

      <button onClick={fetchWeatherData}>Buscar Previsão de Temperatura</button>

      {error && <p>{error}</p>}

      {weatherData && (
        <div className="weather-details">
          <h3>{weatherData.name}, {weatherData.state} - {weatherData.country}</h3>
          <div>
            <h4>Previsão para o mês de {weatherData.data[0].date}</h4>
            <p>Temperatura mínima prevista: {weatherData.data[0].climate_temperature.forecast.min}°C</p>
            <p>Temperatura máxima prevista: {weatherData.data[0].climate_temperature.forecast.max}°C</p>
            <p>Temperatura normal: {weatherData.data[0].climate_temperature.normal.min}°C - {weatherData.data[0].climate_temperature.normal.max}°C</p>
            <p>Temperatura do ano passado: {weatherData.data[0].climate_temperature.last_year.min}°C - {weatherData.data[0].climate_temperature.last_year.max}°C</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clima;