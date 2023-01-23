import { DeleteResult, UpdateResult } from "typeorm";
import { PessoaModel } from "../entitys/Pessoa.model";

export interface PessoaInterface {

    all(): Promise<PessoaModel[]>

    findById(id: number): Promise<PessoaModel[]>;

    findByCPF(cpf: string): Promise<PessoaModel[]>;

    save(pessoa: PessoaModel): Promise<PessoaModel>;

    update(pessoa: PessoaModel): Promise<UpdateResult>;

    delete(id: number): Promise<DeleteResult>;
}