import "reflect-metadata";
import { injectable } from "inversify";


import { PessoaInterface } from "../interfaces/Pessoa.interface";
import { PessoaModel } from "../entitys/Pessoa.model";
import AppDataSource from "../data-source";
import { DeleteResult, UpdateResult } from "typeorm";

import * as bcrypt from "bcrypt"

import * as dotenv from "dotenv"

dotenv.config({ path: "./.env" })

const SALT = process.env.SALT

@injectable()
export class Pessoa implements PessoaInterface {

    private pessoaRepository = AppDataSource.getRepository(PessoaModel);

    constructor() {

    }
   
    async all(): Promise<PessoaModel[]> {

        const allPessoas = await this.pessoaRepository.find()

        return allPessoas
    }

    async findById(id: number): Promise<PessoaModel[]> {

        const onePessoa = await this.pessoaRepository.findBy({ id: id })

        return onePessoa
    }

    async findByCPF(CPF: string): Promise<PessoaModel[]> {
        const onePessoa = await this.pessoaRepository.findBy({cpf: CPF})

        return onePessoa
    }

    async save(pessoa: PessoaModel): Promise<PessoaModel> {
        try {


            const pessoa_nova: PessoaModel = {
                nome: pessoa.nome,
                email: pessoa.email,
                cpf: pessoa.cpf,
                usuario: pessoa.usuario
            }
            const result = await this.pessoaRepository.save(pessoa_nova)

            return result 
        } catch (error) {
            console.log(error);
            
        }

    }

    async update(pessoa: PessoaModel): Promise<UpdateResult> {
        try {

            const pessoa_nova: PessoaModel = {
                id: pessoa.id,
                nome: pessoa.nome,
                email: pessoa.email,
                cpf: pessoa.cpf,
                usuario: pessoa.usuario
            }

            const result = await this.pessoaRepository.update(pessoa_nova.id, pessoa_nova)

            return result
        } catch (e) {
            console.log(e);

        }
    }
    async delete(id: number): Promise<DeleteResult> {
        const result = await this.pessoaRepository.delete(id)

        return result
    }





}