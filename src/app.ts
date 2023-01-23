
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import TYPES from "./TYPES";

import "./controller/Pessoa.controller"
import "./controller/Produto.controller"
import "./controller/Usuario.controller"

import * as bodyParser from "body-parser";
import { Container } from "inversify/lib/container/container";
import { PessoaInterface } from "./interfaces/Pessoa.interface";
import { Pessoa } from "./services/Pessoa.service";
import * as dotenv from "dotenv"
import AppDataSource from "./data-source";
import * as cors from "cors"
import { ProdutoInterface } from "./interfaces/Produto,interface";
import { Produto } from "./services/Produto.service";
import { UsuarioInterface } from "./interfaces/Usuario.interface";
import { Usuario } from "./services/Usuario.service";


var container: Container = new Container();

dotenv.config({ path: "./.env" })

const PORT = process.env.PORT
class App {

    constructor() {
        this.configDependencies();
        this.createServer();
    }

    configDependencies(): void {

        //Aqui fazemos o bind da interface para o service para que o app consiga identificar.
        container.bind<PessoaInterface>(TYPES.PessoaInterface).to(Pessoa);
        container.bind<ProdutoInterface>(TYPES.ProdutoInterface).to(Produto);
        container.bind<UsuarioInterface>(TYPES.UsuarioInterface).to(Usuario)


        
    }

    createServer(): void {
        let server: InversifyExpressServer = new InversifyExpressServer(container);
        server.setConfig((app) => {
            // add body parser
            app.use(bodyParser.urlencoded({
                extended: true
            }))
            app.use(cors())
            app.use(bodyParser.json());
        });

        AppDataSource.initialize()
            .then(() => {
               console.log("db rodando");
               
            })
            .catch((error) => console.log(error))

        let app = server.build();
        app.listen(PORT);
        console.log(`Servidor iniciado na porta ${PORT}`)

    }

}

export default new App();