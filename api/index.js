const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "logindb",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuarios (email, password) VALUE (?,?)",
          [email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado" });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
});

app.get("/listaAtividade", (req, res) => {
  const tabela = [
    { exerc: "Alongamentos", des: "Alongar-se antes de sair da cama pode acordar o corpo e melhorar a sua circulação." },
    { exerc: "Aquecimento", des: "Praticar antes de qualquer atividade fiscia, para que os músculos estejam preparados para a atividade física e se previnam lesões." },
    { exerc: "Natação", des: "Indicada para tratar doenças como a artrite e osteoartrite, trabalha a circulação sanguínea e a respiração, ajudando na diminuição da falta de ar." },
    { exerc: "Caminhadas", des: "Uma hora por dia é suficiente para diminuir os riscos de doenças cardiovasculares, melhorar a coordenação motora." },
    { exerc: "Corrida", des: "Ao correr 30 minutos por dia, cinco dias por semana, melhora a respiração e o equilíbrio." },
    { exerc: "Bicicleta", des: "Trabalha o equilíbrio e a parte aeróbica, como fortalece os músculos das coxas, pernas. É preciso não esquecer o uso de capacete e luvas, para garantir a segurança." },
    { exerc: "Minigolfe", des: "É altamente benéfico para a saúde muscular e óssea. Sua prática regular promove a manutenção da massa muscular magra, essencial para um esqueleto robusto, e contribui para prevenir a degeneração óssea, incluindo a osteoporose." },
    { exerc: "Musculação no ginásio", des: "Exercícios repetitivos e com pouco peso são os ideais para não danificar as articulações, mas ajudar na respiração e circulação sanguínea." },
    { exerc: "Ioga e Pilates", des: "A flexibilidade e o equilíbrio são os principais benefícios destas práticas, além de que procuram igualmente a harmonia entre o aspeto físico e o mental. Ajudam no alívio das dores, fortalecem os músculos, aumentam a flexibilidade e diminuem o stress." },
  ];
     res.json({tabela});
});


app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
