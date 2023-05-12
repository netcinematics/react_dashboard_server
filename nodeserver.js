const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
const port = 8008;
//INSTRUCTION:
//npm run start:server
//http://localhost:8008/msg1

app.get('/', (req, res) => {
  res.send('Holo, wurldz!');
});

app.get('/msg1', async (req, res) => {

    const options = {
      method: 'GET',
      url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAD_KEY,
        'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error(error);
    }


  res.json({data:'msg1'});
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
