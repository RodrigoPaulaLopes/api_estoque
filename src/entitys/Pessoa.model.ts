import { injectable } from "inversify"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Usuario } from "./Usuario.model"

@Entity({schema: "pessoas"})
export class PessoaModel {

    @Column()
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    nome: string

    @Column()
    cpf: string

    @Column()
    email: string


    @OneToMany(() => Usuario, (usuario) => usuario.pessoas)
    usuario: Usuario[]
}