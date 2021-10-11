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
        imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tlvsNCwWEIgwAM23aNzTmMIcPEZ.jpg",
        trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4"   
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
        trailer: url= "https://www.youtube.com/watch?v=hYcw5ksV8YQ"
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
        trailer: "https://www.youtube.com/watch?v=r5X-hFf6Bwo"
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
        trailer: "https://www.youtube.com/watch?v=JCCssUOtn2E"   
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
    trailer: "https://www.youtube.com/watch?v=flVhhEmkNKM"   
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
        link: "https://www.youtube.com/watch?v=rg8aBmwUG9k",
        imagem: "data:image/png;base64,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"   
},
{
    id: 002,
    titulo: "Summer of 69 (metal cover by Leo Moracchioli)",
    descricao: "Cover versão metal da música Summer of 69 do Bryan Adams",
    tipo: "Vídeo Clipe",
    nota: 10,
    link: "https://www.youtube.com/watch?v=rg8aBmwUG9k"   
}];
app.get("/", (req, res) => {
    res.render("index", { titulo: "filmes", filmes: filmes , titulo: "series", series: series, titulo: "livros", livros: livros, titulo: "carros", carros: carros, titulo: "videos", videos: videos });
     
  });

app.get("/detalhesFilmes/:id", (req, res) => {
    const id = req.params.id
    const filme = filmes[id]
    res.render("detalhesFilmes", { filme })
});

app.get("/detalhesSeries/:id", (req, res) => {
    const id = req.params.id
    const serie = series[id]
    res.render("detalhesSeries", { serie })
});

app.get("/detalhesLivros/:id", (req, res) => {
    const id = req.params.id
    const livro = livros[id]
    res.render("detalhesLivros", { livro })
});

app.get("/detalhesCarros/:id", (req, res) => {
    const id = req.params.id
    const carro = carros[id]
    res.render("detalhesCarros", { carro })
});

app.get("/detalhesVideos/:id", (req, res) => {
    const id = req.params.id
    const video = videos[id]
    res.render("detalhesVideos", { video })
});


  app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
