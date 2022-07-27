import connection from '../../config/db.js' 

export const allEmployees = async () => {
    try {
        return await connection.execute('SELECT * FROM Employees')
    } catch (error) {
        throw error
    }
}

export const employeById = async id => {
    try {
       const [rows] = await connection.execute(
            `SELECT * FROM Employees WHERE idEmploye = ${id}`
        );
        return rows;
    } catch (error) {
        throw error
    }
}

export const inserEmploye = async employe => {
    try {
        return await connection.execute(
            `INSERT INTO Employees (
                name,
                document,
                position,
                observations
            ) VALUES (
                '${employe.name}',
                ${employe.document},
                '${employe.position}',
                '${employe.observations}'
            )`
        );
    } catch (error) {
        throw error
    }
}
