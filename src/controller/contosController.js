import { contos } from "../model/iuliadb.js";

let button = 0;

export const getHome = async (req, res) => {
  try {
    const iuliadb = await contos.findAll({
      order: [["id", "ASC"]]
    });
    res.status(200).render("index.ejs", { iuliadb, button });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getAdd = (req, res) => {
  res.status(200).render("cadastro.ejs");
};

export const postAdd = async (req, res) => {
  const { nome, descricao, ano, img_reference, desc_short } = req.body;
  try {
    await contos.create({ nome, descricao, ano, img_reference, desc_short });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getRead = async (req, res) => {
  try {
    const id = +req.params.id;
    const Conto = await contos.findByPk(id);
    res.status(200).render("detalhes.ejs", { Conto });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getUpdate = async (req, res) => {
  button = 0;
  try {
    const id = +req.params.id;
    const Conto = await contos.findByPk(id);
    res.status(200).render("update.ejs", { Conto });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const updatePost = async (req, res) => {
  const { nome, descricao, ano, img_reference, desc_short } = req.body;
  try {
    await contos.update({
       nome: nome, 
       descricao: descricao, 
       ano: ano, 
       img_reference: img_reference, 
       desc_short: desc_short
    }, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getHelp = (req, res) => {
  switch (button) {
    case 0:
      button = 1;
      break;
    case 1:
      button = 0;
      break;
  }
  res.redirect("/");
};

export const getDelete = async (req, res) => {
  try {
    const id = +req.params.id;
    await contos.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
