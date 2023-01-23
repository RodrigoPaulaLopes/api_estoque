import { Request } from "express";
import { PessoaInterface } from "../interfaces/Pessoa.interface";
import { inject } from "inversify";
import {controller, httpDelete, httpGet, httpPost, httpPut, interfaces, request,  requestParam} from "inversify-express-utils";
import TYPES from "../TYPES";
import { PessoaModel } from "../entitys/Pessoa.model";
import { DeleteResult, UpdateResult } from "typeorm";


@controller("/pessoas")
export class PessoaController implements interfaces.Controller{

    private _pessoa: PessoaInterface
    constructor(
        @inject(TYPES.PessoaInterface) IPessoa: PessoaInterface
    ) {
        this._pessoa = IPessoa
    }

    
    @httpGet("/all")
    public all(@request() req: Request): Promise<PessoaModel[]> {
        
        return this._pessoa.all();
    }
    @httpGet("/id/:id")
    public findById(@requestParam("id") id: string): Promise<PessoaModel[]> {
        
        return this._pessoa.findById(Number(id));
    }
    @httpGet("/CPF/:cpf")
    public findByLogin(@requestParam("cpf") cpf: string): Promise<PessoaModel[]> {
        
        return this._pessoa.findByCPF(cpf);
    }
    @httpPost("/save")
    public save(@request() req: Request): Promise<PessoaModel> {

        
        return this._pessoa.save(req.body as PessoaModel);
    }
    @httpPut("/update")
    public update(@request() req: Request): Promise<UpdateResult> {
        
        return this._pessoa.update(req.body as PessoaModel);
    }

    @httpDelete("/delete/:id")
    public delete(@requestParam("id") id: string): Promise<DeleteResult> {
        
        return this._pessoa.delete(Number(id));
    }
}