const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const axios = require('axios');
require('dotenv').config();
const port = 8008;
//INSTRUCTION:
//npm run start:server
//http://localhost:8008/news

app.get('/', (req, res) => {
  res.send('Holo, wurldz!');
});

app.get('/news', async (req, res) => {

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
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.json({data:'err1'});
    }


//   res.json({data:'msg1'});
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
