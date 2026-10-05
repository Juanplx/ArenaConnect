const Modalidade = require("./scr/models/Modalidade");

const {Pessoa, Arbitro , Atleta} = require("./scr/models/Pessoa");

const Turma = require("./scr/models/Turma")

const Equipe = require("./scr/models/Equipe")


class CadastroFactory {
    static criarAtleta(id,nome,idTurma){
        const atleta = new Atleta(id,nome,idTurma);
        if (!atleta.nome) throw new Error("Nome de atleta Invalido!!")
        if (atleta.idTurma === undefined) throw new Error ("Turma do Atleta invalida.")
        return atleta;
    }

    static criarEquipe(id,idTurma,modalidade){
        const equipe = new Equipe(id,idTurma,modalidade);
        if(equipe.idTurma === undefined) throw new Error('Turma da equipe inválida.');
        if(!equipe.modalidade) {
            throw new Error (`Modalidade inválida. Use uma de: ${Object.values(Modalidade).join(',')}`)
        }

        return equipe;
    
        }  



}