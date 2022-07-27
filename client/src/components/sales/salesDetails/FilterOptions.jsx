import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterSalesDetailListAction } from "../../../redux/sales/sales.action";

const FilterOptions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filters = useSelector(({ sales }) => sales.filtersSalesDetails);

    const handleChange = (e) => {
        dispatch(
            filterSalesDetailListAction({
                ...filters,
                [e.target.name]: e.target.value,
            })
        );
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <button
                    onClick={() => navigate(-1)}
                    className="px-3 py-2 text-white rounded-md bg-gray-600 hover:bg-gray-500"
                >
                    Volver
                </button>
                <Link
                    to="/sales/new-sale"
                    className="px-3 py-2 text-white rounded-md bg-slate-800 hover:bg-slate-700"
                >
                    Registrar Venta
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-6">
                <div className="flex flex-wrap gap-2 lg:col-span-4">
                    <div className="">
                        <label htmlform="dateFrom">Fecha desde: </label>
                        <input
                            className="px-2 py-2 border rounded bg-gray-50"
                            type="date"
                            id="dateFrom"
                            name="dateFrom"
                            onChange={handleChange}
                            value={filters.dateFrom}
                        />
                    </div>
                    <div>
                        <label htmlform="dateTo">Fecha hasta: </label>
                        <input
                            className="px-2 py-2 border rounded bg-gray-50"
                            type="date"
                            id="dateTo"
                            name="dateTo"
                            onChange={handleChange}
                            value={filters.dateTo}
                        />
                    </div>
                    <div>
                        <label htmlform="category">Categoria: </label>
                        <select
                            className="px-2 py-2 border rounded bg-gray-50"
                            name="category"
                            id="category"
                            onChange={handleChange}
                            value={filters.category}
                        >
                            <option value="">-- todas --</option>
                            <option value="1">Sonido</option>
                            <option value="2">Lujo</option>
                            <option value="3">Polarizado</option>
                        </select>
                    </div>
                </div>
                <div className="justify-end lg:col-start-5 lg:col-end-7">
                    <div className="flex items-center align-middle">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="search"
                                name="search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=" Buscar"
                                onChange={handleChange}
                                value={filters.search}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterOptions;
