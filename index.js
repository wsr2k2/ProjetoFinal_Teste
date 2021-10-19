require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const db = require('./model/database');
const Filmes = require('./model/Filmes');
app.use(express.urlencoded());



let series = [
    {
        id: 001,
        titulo: "Dark",
        ano: 2017,
        genero: "Drama",
        temporadas: 3,
        episodios: 26,
        sinopse: "Quatro famílias iniciam uma desesperada busca por respostas quando uma criança desaparece e um complexo mistério envolvendo três gerações começa a se revelar.",
        nota: 10,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/Dark_%28s%C3%A9rie%29.jpg/200px-Dark_%28s%C3%A9rie%29.jpg",
        trailer: "https://www.youtube.com/embed/JCCssUOtn2E"   
},
{
    id: 002,
    titulo: "O Justiceiro",
    ano: 2017,
    genero: "Ação",
    temporadas: 2,
    episodios: 26,
    sinopse: "O ex-marine Frank Castle só quer punir os criminosos responsáveis pela morte da sua família, mas torna-se alvo de uma conspiração militar.",
    nota: 10,
    imagem: "https://br.web.img3.acsta.net/pictures/17/10/19/14/40/3658022.jpg",
    trailer: "https://www.youtube.com/embed/Bf8yGbn0__s"   
}];
let livros = [
    {
        id: 001,
        titulo: "Pai Rico, Pai Pobre",
        idioma: "Português",
        autor: "Robert Kiyosaki",
        genero: "Finanças Pessoais, Não Ficção",
        paginas: 336,
        sinopse: "O livro Pai rico, pai pobre narra a história de Robert Kiyosaki e de seu amigo Mike. Ao longo de sua trajetória, Robert recebe orientações financeiras de seu próprio pai – o pai pobre – e do pai de Mike – o pai rico",
        nota: 10,
        imagem: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12710209/1010071147.jpg?v=637154380982930000",
}];
let carros = [
    {
        id: 001,
        marca: "lamborghini",
        modelo: "Aventador SVJ",
        potencia: "770 cv",
        velocidade: "350 km",
        zeroCem: "2.8 s",
        descricao: "O supercarro é equipado com o motor 6.5 V12 que produz 770 cv e 70,4 kgfm de torque e é capaz de acelerar de zero a 100 km/h em apenas 2,9 segundos, além de ultrapassar os 350 km/h de velocidade máxima. A força é repassada para as quatro rodas, enquanto o câmbio é automatizado de sete marchas. O consumo médio é de 5,5 km/l!",
        nota: 10,
        imagem: "https://directimports.com.br/wp-content/uploads/2021/09/Lamborghini-Aventador-SVJ-5.jpg",
        site: "https://www.lamborghini.com/en-en"   
}];
let videos = [
    {
        id: 001,
        titulo: "God Save the Queen (metal cover by Leo Moracchioli)",
        descricao: "Cover versão metal da música God Save The Queen dos Sex Pistols",
        tipo: "Vídeo Clipe",
        nota: 10,
        link: "https://www.youtube.com/embed/Qep9mynlyTg",
          
},
{
    id: 002,
    titulo: "Summer of 69 (metal cover by Leo Moracchioli)",
    descricao: "Cover versão metal da música Summer of 69 do Bryan Adams",
    tipo: "Vídeo Clipe",
    nota: 10,
    link: "https://www.youtube.com/embed/rg8aBmwUG9k",
       
}];
app.get("/", (req, res) => {
    res.render("index", { titulo: "filmes", filmes: "" , titulo: "series", series: series, titulo: "livros", livros: livros, titulo: "carros", carros: carros, titulo: "videos", videos: videos });     
});

app.get("/filmes", async (req, res) => {
  const filmes = await Filmes.findAll()   
  res.render("filmes",{ Filmes: filmes});    
});

app.get("/series", (req, res) => {
    res.render("series",{ titulo: "series", series: series});    
});

app.get("/livros", (req, res) => {
    res.render("livros",{ titulo: "livros", livros: livros});    
});

app.get("/carros", (req, res) => {
    res.render("carros",{ titulo: "carros", carros: carros});    
});

app.get("/videos", (req, res) => {
    res.render("videos",{ titulo: "videos", videos: videos});    
});

app.get("/detalhes/detalhesFilmes/:id", (req, res) => {
    const id = req.params.id
    const filme = filmes[id]
    res.render("detalhes/detalhesFilmes", { filme })
});

app.get("/detalhes/detalhesSeries/:id", (req, res) => {
    const id = req.params.id
    const serie = series[id]
    res.render("detalhes/detalhesSeries", { serie })
});

app.get("/detalhes/detalhesLivros/:id", (req, res) => {
    const id = req.params.id
    const livro = livros[id]
    res.render("detalhes/detalhesLivros", { livro })
});

app.get("/detalhes/detalhesCarros/:id", (req, res) => {
    const id = req.params.id
    const carro = carros[id]
    res.render("detalhes/detalhesCarros", { carro })
});

app.get("/detalhes/detalhesVideos/:id", (req, res) => {
    const id = req.params.id
    const video = videos[id]
    res.render("detalhes/detalhesVideos", { video })
});

app.get("/cadastroFilme", (req, res) => {
    res.render("../views/cadastroFilme")
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
    res.render("cadastroSerie")
  })
  
  app.post("/newSerie", (req, res) => {
    const {titulo, ano, genero, temporadas, episodios, sinopse, nota, imagem, trailer} = req.body;
    const novaSerie = {
      titulo: titulo,
      ano: ano,
      genero: genero,
      temporadas: temporadas,
      episodios: episodios,
      sinopse: sinopse,
      nota: nota,
      imagem: imagem,
      trailer: trailer
    }
    series.push(novaSerie);
    
  res.redirect("/series");
  })
  
  app.get("/cadastroLivro", (req, res) => {
    res.render("cadastroLivro")
  })
  
  app.post("/newLivro", (req, res) => {
    const {titulo, idioma, autor, genero, paginas, sinopse, nota, imagem} = req.body;
    const novoLivro = {
      titulo: titulo,
      idioma: idioma,
      autor: autor,
      genero: genero,
      paginas: paginas,
      sinopse: sinopse,
      nota: nota,
      imagem: imagem
    }
    livros.push(novoLivro);
    
  res.redirect("/livros");
  })

  app.get("/cadastroCarro", (req, res) => {
    res.render("cadastroCarro")
  })
  
  app.post("/newCarro", (req, res) => {
    const {marca, modelo, potencia, velocidade, zeroCem, descricao, nota, imagem} = req.body;
    const novoCarro = {
      marca: marca,
      modelo: modelo,
      potencia: potencia,
      velocidade: velocidade,
      zeroCem: zeroCem,
      descricao: descricao,
      nota: nota,
      imagem: imagem
    }
    carros.push(novoCarro);
    
  res.redirect("/carros");
  })

  app.get("/cadastroVideo", (req, res) => {
    res.render("cadastroVideo")
  })
  
  app.post("/newVideo", (req, res) => {
    const {titulo, descricao, tipo, nota, link} = req.body;
    const novoVideo = {
      titulo: titulo,
      descricao: descricao,
      tipo: tipo,
      nota: nota,
      link: link
    }
    videos.push(novoVideo);
    
  res.redirect("/videos");
  })

  app.get("/teste", (req, res) => {
    res.render("teste")
  })

  db.conectado();

  app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
