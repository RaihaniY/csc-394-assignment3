const express = require('express');
const pool = require("pg");
const app = express()
const port = 3000

const credentials = {
    user: "postgres",
    host: "localhost",
    database: "db-hw3",
    password: "password",
    port: 5432,
};
async function getVersion(){
    const pool = new Pool(credentials);
    const now = await pool.query("SELECT VERSION()");
    await pool.end();
    return now;
}
app.get('/', (req, res) => {
  res.send("Yoseph Raihani's HW3'");
  res.send(getVersion());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})