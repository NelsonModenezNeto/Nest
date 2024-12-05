import { Injectable } from '@nestjs/common';
import { allParam, Aluno } from './aluno.dto';

@Injectable()
export class AlunoService {
    alunos: Aluno[] = [];

    cadastrarAluno(aluno: Aluno){
        this.alunos.push(aluno);
        console.log(aluno);
    }

    getById(id: number): Aluno{
        const aluno = this.alunos.find(al => al.id == id);
        console.log(aluno)
        return aluno;
    }

    getAllAlunos(param: allParam): Aluno[]{
        return this.alunos;
    }
}
