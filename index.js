const json_server = require("json-server");
const cors = require("cors");


const vortexServer = json_server.create();
const middleWare = json_server.defaults();
const router = json_server.router("db.json");


vortexServer.use(cors());
vortexServer.use(middleWare);
vortexServer.use(router);

const PORT = 8000;

vortexServer.listen(PORT, ()=>{
  console.log(`---------PORT RUNNING ON ${PORT}----------`);
})