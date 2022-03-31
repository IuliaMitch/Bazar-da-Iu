import { contos } from "../model/iuliadb.js";

export const getHome = async (req, res) => {
  try {
    const iuliadb = await contos.findAll();
    res.render("index.ejs", { iuliadb });
  } catch (err) {
    res.send(err.message);
  }
};

export const getAdd = async (req, res) => {
  try {
    const iuliadb = await contos.findAll();
    res.render("cadastro.ejs", { iuliadb });
  } catch (err) {
    res.send(err.message);
  }
};

export const getRead = async (req, res) => {
  try {
    const id = +req.params.id
    const Conto = await contos.findByPk(id)
    res.render("detalhes.ejs", { Conto })
}
  catch(err){
    res.send(err.message)
  }

};

const getDelete = async (req, res) => {
  try {
    const id = +req.params.id
    await contos.destroy({
      where: {
        id: id
      }
    })
    res.redirect("/")

  }
  catch(err) {
    res.send(err.message)
  }

}