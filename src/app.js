const express = require ("express");

module.exports = app;
const express = require ("express");
const clienteRoutes = require ("./Routes/clientesRoutes")

const app = express ();
const PORT = process.env.PORT || 3000;
// Midwlewares
app.use(express.json())

//Rota raiz:
app.get("/", (req, res)=>{
    res.json({
        mensagem: "API de Cliente",
        versao:"1.0.0",
        endpoints:{
            listarTodos: "GET /clientes",
            buscarPorId: "GET /clients:id",
        }
    })
})
app.use("/clientes", clientesRoutes);

app.use((req, res) => {
    res.status(404).json({
        sucesso:false,
        mensagem: "Rota não encontrada",
    })
})

app.listen(PORT,() =>{
  console.log(`servidor rondando a porta ${PORT}`)  
})

module.exports = app;