const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path  = require('path');
const basePath = path.join(__dirname, 'templates');

app.use(
  express.urlencoded({
      extended: true
  }))
app.use(express.json());
app.use('/images', express.static(__dirname + '/images'));

app.post('/home', (req, res) => {
  const login = req.body.login;
  
  fs.readFile(`${basePath}/home.html`, 'utf8', (err, data) => {
    const variaveis_html = data.replace('{{login}}', login);
    
    res.send(variaveis_html);
  });
});


app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
})



app.listen(port, () => {
  console.log(`Server rodando na porta ${port}: http://localhost:${port}`);
})