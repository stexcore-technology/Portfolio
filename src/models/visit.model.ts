import { DataTypes, Model } from "sequelize";
import connection from "~/database/connection";

interface IVisit {
    id: number,
    name_project: string,
    count_visit: number
}

class Visit extends Model<IVisit, Omit<IVisit, "id">> implements IVisit {
    public id!: number;
    public name_project!: string;
    public count_visit!: number;
}

Visit.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    count_visit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name_project: {
        type: DataTypes.CHAR,
        allowNull: false
    }
}, {
    sequelize: connection,
    tableName: "visits",
});

export default Visit;