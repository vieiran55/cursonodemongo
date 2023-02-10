import express from "express";
import camisas from "./dados/camisas.js"
import db from "./config/dbConnect.js"
// import livros from "./models/Livro.js";
import routes from "./routes/index.js";
// instalar pelo npm
import cors from "cors";

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso")
});

const app = express();
//acrescentar cors
app.use(cors())
app.use(express.json());
routes(app);

export default app;
// const livros = [
//   { id: 1, titulo: "Senhor dos Aneis" },
//   { id: 2, titulo: "O Hobbit" },
// ];

// app.get("/", (req, res) => {
//   res.status(200).send("Curso de Node");
// });

//Read == Recebe
// app.get("/camisas", (req, res) => {
//   res.status(200).json(camisas);
// });

// app.get("/livros/:id", (req, res) => {
//   let index = buscaLivro(req.params.id);
//   res.json(livros[index]);
// })


//Create += Cria ou Acrescenta
// app.post("/livros", (req, res) => {
//   livros.push(req.body);
//   res.status(201).send("livro foi cadastrado com sucesso");
// });

// Update == Altera
// app.put("/livros/:id", (req, res) => {
//   let index = buscaLivro(req.params.id);
//   livros[index].titulo = req.body.titulo;
//   res.json(livros);
// })

// app.delete("/livros/:id", (req, res) => {
//   let {id} = req.params;
//   let index = buscaLivro(id);
//   livros.splice(index, 1);
//   res.send(`Livro ${id} removido com sucesso.`);
// })

// function buscaLivro(id) {
//   return livros.findIndex(livro => livro.id == id)
// }
