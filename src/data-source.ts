import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { PessoaModel } from "./entitys/Pessoa.model"
import { ProdutoModel } from "./entitys/Produto.model"
import { Usuario } from "./entitys/Usuario.model"
import { EntradaProduto } from "./entitys/EntradaProduto.model"
import { SaidaProduto } from "./entitys/SaidaProduto.model"
import { Cidade } from "./entitys/Cidade.entity"
import { Fornecedor } from "./entitys/Fornecedor.entity"
import { Categoria } from "./entitys/Categoria.entity"
import { Entrada } from "./entitys/Entrada.model"
import { Saida } from "./entitys/Saida.model"
import { Transportadora } from "./entitys/Transportadora.model"
import { Loja } from "./entitys/Loja.model"


dotenv.config({ path: './.env' })

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3307,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: [
        PessoaModel,
        ProdutoModel,
        Usuario,
        EntradaProduto,
        SaidaProduto,
        Cidade,
        Fornecedor,
        Categoria,
        Entrada,
        Saida,
        Transportadora,
        Loja
    ],
    synchronize: true,
    logging: false,
})

export default AppDataSource