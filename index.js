require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const db = require('./model/database');
const Filmes = require('./model/Filmes');
const Series = require('./model/Series');
const Livros = require('./model/Livros');
const Carros = require('./model/Carros');
const Videos = require('./model/Videos');
app.use(express.urlencoded());


app.get("/", (req, res) => {
    res.render("index", { titulo: "filmes", filmes: "" , titulo: "series", series: "", titulo: "livros", livros: "", titulo: "carros", carros: "", titulo: "videos", videos: "" });     
});

app.get("/filmes", async (req, res) => {
  const filmes = await Filmes.findAll()   
  res.render("../controller/filmes",{ Filmes: filmes});    
});

app.get("/series", async (req, res) => {
  const series = await Series.findAll()   
  res.render("../controller/series",{ Series: series});    
});

app.get("/livros", async (req, res) => {
  const livros = await Livros.findAll()   
  res.render("../controller/livros",{ Livros: livros});    
});
app.get("/carros", async (req, res) => {
  const carros = await Carros.findAll()   
  res.render("../controller/carros",{ Carros: carros});    
});
app.get("/videos", async (req, res) => {
  const videos = await Videos.findAll()   
  res.render("../controller/videos",{ Videos: videos});    
});

app.get("/detalhes/detalhesFilmes/:id", async (req, res) => {
   const filme = await Filmes.findByPk(req.params.id);   
  res.render("detalhes/detalhesFilmes", { filme })
});

app.get("/detalhes/detalhesSeries/:id", async (req, res) => {
  const serie = await Series.findByPk(req.params.id);   
 res.render("detalhes/detalhesSeries", { serie })
});

app.get("/detalhes/detalhesLivros/:id", async (req, res) => {
  const livro = await Livros.findByPk(req.params.id);   
 res.render("detalhes/detalhesLivros", { livro })
});

app.get("/detalhes/detalhesCarros/:id", async (req, res) => {
  const carros = await Carros.findByPk(req.params.id);   
 res.render("detalhes/detalhesCarros", { carro })
});

app.get("/detalhes/detalhesVideos/:id", async (req, res) => {
  const video = await Videos.findByPk(req.params.id);   
 res.render("detalhes/detalhesVideos", { video })
});

app.get("/cadastroFilme", (req, res) => {
    res.render("../controller/cadastroFilme")
  })
  
app.post("/newFilme", async (req, res) => {
    const {titulo, ano, genero, duracao, sinopse, nota, imagem, trailer} = req.body;
    const filmes = await Filmes.create ({
      titulo: titulo,
      ano: ano,
      genero: genero,
      duracao: duracao,
      sinopse: sinopse,
      nota: nota,
      imagem: imagem,
      trailer: trailer
    })        
  res.redirect("/filmes");
  })

app.get("/cadastroSerie", (req, res) => {
    res.render("../controller/cadastroSerie")
  })
  
app.post("/newSerie", async (req, res) => {
    const {titulo, ano, genero, temporadas, sinopse, nota, imagem, trailer} = req.body;
    const series = await Series.create ({
      titulo: titulo,
      ano: ano,
      genero: genero,
      temporadas: temporadas,
      sinopse: sinopse,
      nota: nota,
      imagem: imagem,
      trailer: trailer
    })        
  res.redirect("/series");
})

app.get("/cadastroLivro", (req, res) => {
  res.render("../controller/cadastroLivro")
})

app.post("/newLivro", async (req, res) => {
  const {titulo, idioma, autor, genero, paginas, sinopse, nota, imagem} = req.body;
  const livros = await Livros.create ({
    titulo: titulo,
    idioma: idioma,
    autor: autor,
    genero: genero,
    paginas: paginas,
    sinopse: sinopse,
    nota: nota,
    imagem: imagem
})      
res.redirect("/livros");
})

app.get("/cadastroCarro", (req, res) => {
  res.render("../controller/cadastroCarro")
})

app.post("/newCarro", async (req, res) => {
  const {marca, modelo, potencia, velocidade, zeroCem, descricao, nota, imagem, site} = req.body;
  const carros = await Carros.create ({
    marca: marca,
    modelo: modelo,
    potencia: potencia,
    velocidade: velocidade,
    zeroCem: zeroCem,
    descricao: descricao,
    nota: nota,
    imagem: imagem,
    site: site
})      
res.redirect("/carros");
})
  
app.get("/cadastroVideo", (req, res) => {
  res.render("../controller/cadastroVideo")
})

app.post("/newVideo", async (req, res) => {
  const {titulo, ano, genero, temporadas, sinopse, nota, imagem, trailer} = req.body;
  const videos = await Videos.create ({
    titulo: titulo,
    ano: ano,
    genero: genero,
    temporadas: temporadas,
    sinopse: sinopse,
    nota: nota,
    imagem: imagem,
    trailer: trailer
})      
res.redirect("/videos");
})  


app.get('/filmedelete/:id', async (req,res) => {
  const filme = await Filmes.findByPk(req.params.id);

  await filme.destroy();

  res.redirect("/filmes");
});

app.get('/seriedelete/:id', async (req,res) => {
  const serie = await Series.findByPk(req.params.id);

  await serie.destroy();

  res.redirect("/series");
});


app.get('/filmeedit/:id', async (req,res) => {
  const filme = await Filmes.findByPk(req.params.id);
  res.render("../controller/cadastroFilme", {filme: filme});
});

app.post('/filmeedit/:id', async (req,res) =>{
  const filme = await Filmes.findByPk(req.params.id);
  const { titulo, ano, genero, duracao, sinopse, nota, imagem, trailer} = req.body;
  
  filme.titulo = titulo;
  filme.ano = ano;
  filme.genero = genero;
  filme.duracao = duracao;
  filme.sinopse = sinopse;
  filme.nota = nota;
  filme.imagem = imagem;
  filme.trailer = trailer

  await filme.save();
  res.redirect("/filmes");
});

app.get('/serieedit/:id', async (req,res) => {
  const serie = await Filmes.findByPk(req.params.id);
  res.render("../controller/cadastroSerie", {serie: serie});
});

app.post('/serieedit/:id', async (req,res) =>{
  const serie = await Series.findByPk(req.params.id);
  const { titulo, ano, genero, temporadas, sinopse, nota, imagem, trailer} = req.body;
  
  filme.titulo = titulo;
  filme.ano = ano;
  filme.genero = genero;
  filme.temporadas = temporadas;
  filme.sinopse = sinopse;
  filme.nota = nota;
  filme.imagem = imagem;
  filme.trailer = trailer

  await serie.save();
  res.redirect("/series");
});


db.conectado();

app.listen(port, () =>
console.log(`Servidor rodando em http://localhost:${port}`)
);
