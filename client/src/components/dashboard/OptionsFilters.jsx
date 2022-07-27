import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Card from "../ui/Card/Card";
import { XIcon } from "@heroicons/react/solid";
import { getAllEmployeesAction } from "../../redux/employees/employees.actions";

const OptionsFilters = ({ setShowFilters }) => {
    const dispatch = useDispatch();
    const filters = useSelector(({ reports }) => reports.filters);
    const { employees } = useSelector(({ employees }) => employees);
    const [searchParams, setSearchParams] = useSearchParams(filters);

    const handleChange = (e) => {
        setSearchParams({
            ...Object.fromEntries([...searchParams]),
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        dispatch(getAllEmployeesAction());
    }, []);

    return (
        <Card className="py-4">
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-end ">
                    <div
                        className="hover:bg-indigo-100 cursor-pointer p-1 rounded-full transition duration-200 ease-in-out hover:text-indigo-600 hover:shadow-sm text-gray-700"
                        onClick={() => setShowFilters(false)}
                    >
                        <XIcon className="h-5 w-5 " />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 lg:col-span-4">
                    <div className="">
                        <label htmlform="dateFrom">Desde: </label>
                        <input
                            className="px-2 py-2 border rounded bg-gray-50"
                            type="date"
                            id="dateFrom"
                            name="dateFrom"
                            onChange={handleChange}
                            value={
                                Object.fromEntries([...searchParams]).dateFrom
                            }
                        />
                    </div>
                    <div>
                        <label htmlform="dateTo">Hasta: </label>
                        <input
                            className="px-2 py-2 border rounded bg-gray-50"
                            type="date"
                            id="dateTo"
                            name="dateTo"
                            onChange={handleChange}
                            value={Object.fromEntries([...searchParams]).dateTo}
                        />
                    </div>
                    <div>
                        <label htmlform="category">Categoria: </label>
                        <select
                            className="px-2 py-2 border rounded bg-gray-50"
                            name="category"
                            id="category"
                            onChange={handleChange}
                            value={
                                Object.fromEntries([...searchParams]).category
                            }
                        >
                            <option value="">-- todas --</option>
                            <option value="1">Sonido</option>
                            <option value="2">Lujo</option>
                            <option value="3">Polarizado</option>
                        </select>
                    </div>
                    <div>
                        <label htmlform="employe">Empleados: </label>
                        <select
                            className="px-2 py-2 border rounded bg-gray-50"
                            name="employe"
                            id="employe"
                            onChange={handleChange}
                            value={
                                Object.fromEntries([...searchParams]).employe
                            }
                        >
                            <option value="">-- todos --</option>
                            {employees &&
                                employees.map((employe) => (
                                    <option
                                        key={employe.idEmploye}
                                        value={employe.idEmploye}
                                    >
                                        {employe.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default OptionsFilters;
