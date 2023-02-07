import app from "./src/app.js";

// carrega o modulo http
// const http = require("http");
// seta a porta
const port = process.env.PORT || 3000;

// const rotas = {
//   "/": "Curso de Node",
//   "/livros": "Entrei na pag de livros",
//   "/autores": "Listagem de autores",
//   "/editora": "Pagina de editoras",
//   "/sobre": "Info sobre o projeto",
// }

// // definimos o servidor
// // os paramentos req e res em uma arrow function
// const server = http.createServer((req, res) => {
//   // serve para fazer a requisição na porta 200
//   res.writeHead(200, {"Content-Type": "text/plain"});
//   // serve para direcionar a rota
//   res.end(rotas[req.url]);
// });

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});