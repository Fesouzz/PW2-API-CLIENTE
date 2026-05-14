const clientes = require ("../../data/cliente");

const listarClientes = async (req,res) => {
    try{
        return res.status(200).json({
            sucesso = true,
            total: clientes.length,
            dados: clientes,
        });
    }catch (error){
        return res.status(500).json({
            sucesso = false,
            mensagem: "Erro ao listar clientes",
            erro = error.message,
        });

    }
};

const buscarClientesporID = async (req,res) => {
    try{
        const id = parseInt(req.params.id);
        if(isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem:"ID inválido. Deve ser um número inteiro",
            });
        }

        const cliente = clientes.find((C) => c.id === id);

        if(!cliente){
            return res.status(404).json({
                sucesso: false,
                mensagem: `Cliente com id${id} não encontrado`,
            });
    
        }

        return res.status(200).json ({
            sucesso = true,
            dados: cliente,
        })
    
    }catch(error){
        return res.status(500).json({
            sucesso = false,
            mensagem: "Erro ao buscar clientes por id",
            erro: error.message,
        });
    }
}
module.exports = {
    listarClientes,
    buscarClientesporID
};