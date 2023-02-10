import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).sendFile('index.html', {root: path.join(__dirname, 'public')});
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
    //incluir headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
    // ate aqui
  });

  app.use(express.json(), livros, autores);
  app.use(express.static("public"));

};

export default routes;
