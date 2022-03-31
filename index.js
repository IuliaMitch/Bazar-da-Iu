import express from "express";
import { router } from "./src/routes/routes.js";
import path from "path";


const port = 3000;
const app = express();
const __dirname = path.resolve(path.dirname(''))

app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.listen(port, (req, res) => {
  console.log("Rodando na porta " + port);
});
