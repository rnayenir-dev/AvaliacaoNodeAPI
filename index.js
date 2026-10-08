import express from 'express'
import router from './src/router/filmes.js'

const app = express();
app.use(express.json())

app.use("/api/fimes", router)

app.listen(3000, () => {
    console.log("Servidor ouvind na porta 3000")
})