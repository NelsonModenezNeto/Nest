import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { allParam, Aluno } from './aluno.dto';
import { AlunoService } from './aluno.service';
import { ApiProperty } from '@nestjs/swagger';

@Controller('aluno')
export class AlunoController {
    
    constructor(private readonly service: AlunoService){}
    
    @ApiProperty({
        type: Aluno,
        description: 'Aluno a ser cadastrado'
    })
    @Post()
    createAluno(@Body() aluno: Aluno) {
        this.service.cadastrarAluno(aluno);
    }

    @Get("/id/:id")
    getById(@Param("id") id: number): Aluno{
        return this.service.getById(id);
    }

    @Get("/all")
    getAllAlunos(@Query() param: allParam): Aluno[]{
        return this.service.getAllAlunos(param);
    }


}
