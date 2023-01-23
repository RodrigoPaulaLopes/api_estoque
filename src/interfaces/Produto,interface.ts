import { DeleteResult, UpdateResult } from "typeorm";
import { ProdutoModel } from "../entitys/Produto.model";

export interface ProdutoInterface {

    all(): Promise<ProdutoModel[]>

    findById(id: number): Promise<ProdutoModel[]>;

    findByName(name: string): Promise<ProdutoModel[]>;

    save(produto: ProdutoModel): Promise<ProdutoModel>;

    update(produto: ProdutoModel): Promise<UpdateResult>;

    delete(id: number): Promise<DeleteResult>;
}