const AtletaView = require("../views/AtletaView")

const AtletaController = {
    adicionar(sistema){
        //ListarTurmas - TurmaVIew
        const idTurma = AtletaView.perguntarIdTurma();
        sistema.buscarTurmaOuFalhar(idTurma);
        try {
            sistema.buscarTurmaOuFalhar(idTurma);
            const nome = AtletaView.perguntarNome();
            const {atleta, turma} = sistema.adicionarAtleta(idTurma, nome)
            AtletaView.mostrarAtletaVinculado(atleta.nome, turma.nome)
        }   
        catch(erro){
            AtletaView.mostrarErroCadastro(erro.messege)
        }

    },
    listar(sistema){
        AtletaView.listar(sistema.listarAtletas());
    },
}

module.exports = AtletaController;