const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let filmes = [
    {
        id: 001,
        titulo: "O Senhor dos Anéis - A Sociedade do Anel",
        ano: 2001,
        genero: "Aventura, Ficção, Ação",
        duracao: "2h 59m",
        sinopse: "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove pessoas que formam a Sociedade do Anel.",
        nota: 10,
        imagem: "/img/aneis.jpg",
        trailer: "https://www.youtube.com/embed/V75dMMIW2B4"   
},
    {
        id: 002,
        titulo: "O Senhor dos Anéis - As Duas Torres",
        ano: 2002,
        genero: "Aventura, Ficção, Ação",
        duracao: "3h",
        sinopse: "Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.",
        nota: 10,
        imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/20eUL6eN89SM0U7KPDw8iR82mOT.jpg",
        trailer: url= "https://www.youtube.com/embed/hYcw5ksV8YQ"
},
{
        id: 003,
        titulo: "O Senhor dos Anéis - O Retorno do Rei",
        ano: 2003,
        genero: "Aventura, Ficção, Ação",
        duracao: "3h 22m",
        sinopse: "O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.",
        nota: 10,
        imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/izPNMzffsgZUvlbiYlPxjFr3TAa.jpg",
        trailer: "https://www.youtube.com/embed/r5X-hFf6Bwo"
}];

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
    res.render("index", { titulo: "filmes", filmes: filmes , titulo: "series", series: series, titulo: "livros", livros: livros, titulo: "carros", carros: carros, titulo: "videos", videos: videos });     
});

app.get("/filmes", (req, res) => {
    res.render("filmes",{ titulo: "filmes", filmes: filmes});    
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
    res.render("cadastroFilme")
  })
  
app.post("/newFilme", (req, res) => {
    const {titulo, ano, genero, duracao, sinopse, nota, imagem, trailer} = req.body;
    const novoFilme = {
      titulo: titulo,
      ano: ano,
      genero: genero,
      duracao: duracao,
      sinopse: sinopse,
      nota: nota,
      imagem: imagem,
      trailer: trailer
    }
    filmes.push(novoFilme);
    
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

  app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
