import initConnection from "~/database/init.connection";
import Visit from "~/models/visit.model"

export default new class VisitsService {

    public async getVisit(name_project: string) {
        // Initialize connection
        await initConnection();

        // Find visit
        return Visit.findOne({ where: { name_project: name_project } }).then(record => record?.toJSON());
    }

    public async incrementVisit(name_project: string) {
        // Initialize connection
        await initConnection();

        // Find or create a record
        const visit = await Visit.findOrCreate({ 
            where: { name_project },
            defaults: { name_project, count_visit: 0 }
        });

        // Increment
        return (await visit[0].increment("count_visit")).toJSON();
    }
    
}