import { Request } from "express";
import { inject } from "inversify";
import {controller, httpDelete, httpGet, httpPost, httpPut, request,  requestParam,  interfaces} from "inversify-express-utils";
import TYPES from "../TYPES";
import { DeleteResult, UpdateResult } from "typeorm";
import { ProdutoInterface } from "../interfaces/Produto,interface";
import { ProdutoModel } from "../entitys/Produto.model";


@controller("/produtos")
export class ProdutoController implements interfaces.Controller{

    private _produto: ProdutoInterface
    constructor(
        @inject(TYPES.ProdutoInterface) IProduto: ProdutoInterface
    ) {
        this._produto = IProduto
    }

    
    @httpGet("/all")
    public all(@request() req: Request): Promise<ProdutoModel[]> {
        
        return this._produto.all();
    }
    @httpGet("/id/:id")
    public findById(@requestParam("id") id: string): Promise<ProdutoModel[]> {
        
        return this._produto.findById(Number(id));
    }
    @httpGet("/name/:name")
    public findByName(@requestParam("name") name: string): Promise<ProdutoModel[]> {
        
        return this._produto.findByName(name);
    }
    @httpPost("/save")
    public save(@request() req: Request): Promise<ProdutoModel> {
        
        return this._produto.save(req.body as ProdutoModel);
    }
    @httpPut("/update")
    public update(@request() req: Request): Promise<UpdateResult> {
        
        return this._produto.update(req.body as ProdutoModel);
    }

    @httpDelete("/delete/:id")
    public delete(@requestParam("id") id: string): Promise<DeleteResult> {
        
        return this._produto.delete(Number(id));
    }
}