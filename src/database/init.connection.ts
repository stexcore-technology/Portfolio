import connection from "./connection";

export default async function initConnection() {
    await connection.sync();
}