const express = require('express');
const axios = require('axios');
const exphbs = require('express-handlebars');

const app = express();
const hbs = exphbs.create({ defaultLayout: 'main' });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('search', { query: req.query.q });
});

app.post('/search', async (req, res) => {
  const query = req.body.query;
  const apiKey = 'fe4708ea472843b199f1200e15fe7310';
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.render('results', { articles: response.data.articles, query });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al buscar noticias');
  }
});

app.listen(3000, () => {
  console.log('Aplicación escuchando en el puerto 3000');
});
