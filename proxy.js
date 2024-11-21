import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());

// Rota para acessar a API Climatempo via proxy
app.get('/api/clima/:cityId', async (req, res) => {
  const { cityId } = req.params;

  try {
    const response = await axios.get(`http://apiadvisor.climatempo.com.br/api/v1/climate/temperature/locale/${cityId}`, {
      params: { token: '29bb4c0d60b0136dd4979b60c1a21ea7' },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao acessar a API Climatempo:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao acessar a API Climatempo' });
  }
});

app.listen(5000, () => {
  console.log('Servidor proxy rodando em http://localhost:5000');
});
