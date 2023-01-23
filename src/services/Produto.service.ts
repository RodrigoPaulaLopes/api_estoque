import "reflect-metadata";
import { injectable } from "inversify";


import { PessoaModel } from "../entitys/Pessoa.model";
import AppDataSource from "../data-source";
import { DeleteResult, UpdateResult } from "typeorm";


import * as dotenv from "dotenv"
import { ProdutoInterface } from "../interfaces/Produto,interface";
import { ProdutoModel } from "../entitys/Produto.model";

dotenv.config({path: "./.env"})


@injectable()
export class Produto implements ProdutoInterface {

    private produtoRepository = AppDataSource.getRepository(ProdutoModel);
   
    constructor() {
        
    }
    
    async all(): Promise<ProdutoModel[]> {
        const allProdutos = await this.produtoRepository.find()

       return allProdutos
    }
    async findById(id: number): Promise<ProdutoModel[]> {
        const oneProduto = await this.produtoRepository.findBy({id: id})

        return oneProduto
    }
    async findByName(name: string): Promise<ProdutoModel[]> {
        const oneProduto = await this.produtoRepository.findBy({nome: name})

        return oneProduto
    }
    async save(produto: ProdutoModel): Promise<ProdutoModel> {
        const result = await this.produtoRepository.save(produto)

        return result
    }
    async update(produto: ProdutoModel): Promise<UpdateResult> {
        const result = await this.produtoRepository.update(produto.id, produto)

        return result
    }
    async delete(id: number): Promise<DeleteResult> {
        const result = await this.produtoRepository.delete(id)

       return result
    }
  
   


 
          
}