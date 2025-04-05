import { existsSync, mkdirSync } from "fs";
import path from "path";
import { Sequelize } from "sequelize";

if(!existsSync(path.resolve(".data"))) {
    mkdirSync(path.resolve(".data"));
}

export default new Sequelize({
    dialect: "sqlite",
    storage: path.resolve(".data/database.sqlite")
});