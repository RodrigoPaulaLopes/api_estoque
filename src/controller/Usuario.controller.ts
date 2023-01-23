import { Request } from "express";
import { inject } from "inversify";
import {controller, httpDelete, httpGet, httpPost, httpPut, interfaces, request,  requestParam} from "inversify-express-utils";
import TYPES from "../TYPES";
import { DeleteResult, UpdateResult } from "typeorm";
import { UsuarioInterface } from "../interfaces/Usuario.interface";
import {Usuario as UsuarioModel} from "../entitys/Usuario.model"

@controller("/usuarios")
export class UsuarioController implements interfaces.Controller{

    private _usuario: UsuarioInterface
    constructor(
        @inject(TYPES.UsuarioInterface) IUsuario: UsuarioInterface
    ) {
        this._usuario = IUsuario
    }

    
    @httpGet("/all")
    public all(@request() req: Request): Promise<UsuarioModel[]> {
        
        return this._usuario.all();
    }
    @httpGet("/id/:id")
    public findById(@requestParam("id") id: string): Promise<UsuarioModel[]> {
        
        return this._usuario.findById(Number(id));
    }
    @httpGet("/login/:login")
    public findByLogin(@requestParam("login") login: string): Promise<UsuarioModel[]> {
        
        return this._usuario.findByLogin(login);
    }
    @httpPost("/save")
    public save(@request() req: Request): Promise<UsuarioModel> {

        
        return this._usuario.save(req.body as UsuarioModel);
    }
    @httpPut("/update")
    public update(@request() req: Request): Promise<UpdateResult> {
        
        return this._usuario.update(req.body as UsuarioModel);
    }

    @httpDelete("/delete/:id")
    public delete(@requestParam("id") id: string): Promise<DeleteResult> {
        
        return this._usuario.delete(Number(id));
    }
}