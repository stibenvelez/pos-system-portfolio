import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeByIdAction } from "../../redux/employees/employees.actions";
import SkeletonTable from "../../shared/SkeletonTable";

import { Table, Row, Thead } from "../ui/Table";

const EmployeeList = ({ setOptionsState }) => {
    const dispatch = useDispatch();

    const handleViewEmployee = (id) => {
        setOptionsState("viewEmploye");
        dispatch(getEmployeeByIdAction(id));
    };
    const { employees, loading } = useSelector(({ employees }) => employees);
    const COLUMNS = [{ name: "Nombre" }, { name: "Acciones" }];

    const DATA =
        employees &&
        employees.map((employe) => ({
            name: employe.name,
            actions: (
                <div className="flex justify-center">
                    <button
                        onClick={() => handleViewEmployee(employe.idEmploye)}
                        className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-l hover:bg-gray-600"
                    >
                        Ver
                    </button>
                    {/* <button className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 hover:bg-blue-800">
                        Editar
                    </button> */}
                    <button
                        className={`items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-r  ${
                            employe.idState === 1
                                ? "hover:bg-red-500"
                                : "hover:bg-green-600"
                        } hover:bg-red-500`}
                    >
                        Desactivar
                    </button>
                </div>
            ),
        }));

    if (loading) {
        return <SkeletonTable />;
    }
    return (
        <Table>
            <Thead>
                <tr className="text-left">
                    {COLUMNS.map((column, index) => (
                        <th key={index} scope="col" className="px-6 py-3">
                            {column.name}
                        </th>
                    ))}
                </tr>
            </Thead>
            <tbody>
                {DATA.map((employe, index) => (
                    <Row key={index}>
                        <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 capitalize dark:text-white whitespace-nowrap"
                        >
                            {employe.name}
                        </th>
                        <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 capitalize dark:text-white whitespace-nowrap"
                        >
                            {employe.actions}
                        </th>
                    </Row>
                ))}
            </tbody>
        </Table>
    );
};

export default EmployeeList;
