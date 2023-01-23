import "reflect-metadata";
import { injectable } from "inversify";

import AppDataSource from "../data-source";
import { DeleteResult, UpdateResult } from "typeorm";
import { Usuario as UsuarioModel }  from "../entitys/Usuario.model"
import * as bcrypt from "bcrypt"

import * as dotenv from "dotenv"
import { UsuarioInterface } from "../interfaces/Usuario.interface";

dotenv.config({ path: "./.env" })

const SALT = process.env.SALT

@injectable()
export class Usuario implements UsuarioInterface {

    private usuarioRepository = AppDataSource.getRepository(UsuarioModel);

    constructor() {

    }

    async all(): Promise<UsuarioModel[]> {

        const allUsuarios = await this.usuarioRepository.find()

        return allUsuarios
    }

    async findById(id: number): Promise<UsuarioModel[]> {

        const oneUsuario = await this.usuarioRepository.findBy({ id: id })

        return oneUsuario
    }

    async findByLogin(login: string): Promise<UsuarioModel[]> {
        const oneUsuario = await this.usuarioRepository.findBy({ login: login })

        return oneUsuario
    }

    async save(usuario: UsuarioModel): Promise<UsuarioModel> {
        try {

            const nova_senha = await bcrypt.hash(usuario.senha, Number(SALT))
            const pessoa_nova: UsuarioModel = {
                login: usuario.login,
                senha: nova_senha,
                pessoas: usuario.pessoas


            }
            const result = await this.usuarioRepository.save(pessoa_nova)

            return result
        } catch (error) {
            console.log(error);

        }

    }

    async update(usuario: UsuarioModel): Promise<UpdateResult> {
        try {
            const nova_senha = await bcrypt.hash(usuario.senha, Number(SALT))

            const pessoa_nova: UsuarioModel = {
                id: usuario.id,
                login: usuario.login,
                senha: nova_senha,
                pessoas: usuario.pessoas
            }

            const result = await this.usuarioRepository.update(pessoa_nova.id, pessoa_nova)

            return result
        } catch (e) {
            console.log(e);

        }
    }
    async delete(id: number): Promise<DeleteResult> {
        const result = await this.usuarioRepository.delete(id)

        return result
    }





}