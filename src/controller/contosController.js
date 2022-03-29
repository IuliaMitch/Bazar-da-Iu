import { contos } from  '../model/iuliadb.js'

export const getHome = async (req, res) => {
  try {
    const iuliadb = await contos.findAll()
    res.render("index.ejs", { iuliadb });
  }
  catch(err) {
    console.log(err.message)
  }
};

export const getAdd = async (req, res) => {
  try {
    const iuliadb = await contos.findAll()
    res.render("cadastro.ejs", { iuliadb });
  }
  catch(err) {
    console.log(err.message)
  }
};
