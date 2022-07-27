import { allEmployees, employeById, inserEmploye } from "./employe.DAL.js";
export const getAllEmployees = async (req, res) => {
    try {
        const [rows] = await allEmployees();
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
};
export const getEmployeById = async (req, res) => {
    try {
        const [rows] = await employeById(req.params.id);
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
};

export const createNewEmploye = async (req, res) => {
    try {
        await inserEmploye(req.body);
        res.json({msg: "empleado registrado con exito"});
    } catch (error) {
        res.status(500).json({ msg: "Error al registrar el empleado" });
        console.log(error);
    }
}