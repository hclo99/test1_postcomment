const express = require("express");
const app = express();
const port = 3300;
const routes = require("./routes/index");
const connect = require("./schemas");
connect();

app.use(express.json());

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("게시물을 보기 위해 url에 /posts 를 추가해주세요!");
});
app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
