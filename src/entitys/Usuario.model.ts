import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PessoaModel } from "./Pessoa.model";

@Entity({schema: "usuarios"})
export class Usuario {

    @Column()
    @PrimaryGeneratedColumn()
    id?: number
    @Column()
    login: string
    @Column()
    senha: string

    @ManyToOne(() => PessoaModel, (pessoa) => pessoa.usuario)
    pessoas: PessoaModel
}