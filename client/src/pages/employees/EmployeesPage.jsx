import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeList from "../../components/employe/EmployeeList";
import ActionsSections from "../../components/employees/ActionsSections";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card/Card";
import Template from "../../components/ui/Template";
import { getAllEmployeesAction } from "../../redux/employees/employees.actions";

const EmployeesPage = () => {
    const dispatch = useDispatch();

    const [optionsState, setOptionsState] = useState(false);

    useEffect(() => {
        (() => dispatch(getAllEmployeesAction()))();
    }, []);



    return (
        <Template
            title={"Empleados"}
            description={"Administre la información de los empleados aquí"}
        >
            <div className="flex flex-col gap-4">
                <Card>
                    <div>
                        <Button
                            value={"agregar empelado"}
                            onClick={() => setOptionsState("addEmploye")}
                        />
                    </div>
                </Card>
                <div className="flex flex-col gap-4 lg:flex-row ">
                    {optionsState && (
                        <div className="w-full max-w-xl ">
                            <ActionsSections
                                optionsState={optionsState}
                                setOptionsState={setOptionsState}
                            />
                        </div>
                    )}
                    <div className="w-full max-w-xl">
                        <EmployeeList
                            setOptionsState={setOptionsState}
                        />
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default EmployeesPage;
