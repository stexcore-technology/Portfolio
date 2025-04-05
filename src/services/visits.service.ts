import connection from "~/database/connection";
import Visit from "~/models/visit.model"

export default new class VisitsService {

    constructor() {
        connection.sync();
    }

    public async getVisit(name_project: string) {
        return Visit.findOne({ where: { name_project: name_project } }).then(record => record?.toJSON());
    }

    public async incrementVisit(name_project: string) {
        const visit = await Visit.findOrCreate({ 
            where: { name_project },
            defaults: { name_project, count_visit: 0 }
        });

        return (await visit[0].increment("count_visit")).toJSON();
    }
    
}