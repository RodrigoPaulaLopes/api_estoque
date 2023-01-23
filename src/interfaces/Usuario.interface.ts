import { DeleteResult, UpdateResult } from "typeorm";
import { Usuario } from "../entitys/Usuario.model";

export interface UsuarioInterface {

    all(): Promise<Usuario[]>

    findById(id: number): Promise<Usuario[]>;

    findByLogin(login: string): Promise<Usuario[]>;

    save(usuario: Usuario): Promise<Usuario>;

    update(usuario: Usuario): Promise<UpdateResult>;

    delete(id: number): Promise<DeleteResult>;
}