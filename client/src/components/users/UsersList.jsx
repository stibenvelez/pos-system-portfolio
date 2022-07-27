import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SkeletonTable from "../../shared/SkeletonTable";
import { Table } from "../ui/Table";

const UsersList = () => {
    const { users, loading } = useSelector(({ users }) => users);

    if (loading) {
        return (
            <div>
                <SkeletonTable columns={5} rows={5} />
            </div>
        );
    }

    return (
        <Table>
            <thead className="text-xs uppercase text-gray-50 bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        User
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Primer Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Apellido
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Roll
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                {users &&
                    users.map((user, i) => (
                        <tr
                            key={i}
                            className="bg-white border-b shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 "
                        >
                            <td className="px-6 py-2">{user.user}</td>
                            <td className="px-6 py-2">{user.firstName}</td>
                            <td className="px-6 py-2">{user.lastName}</td>
                            <td className="px-6 py-2">{user.confirm}</td>
                            <td className="px-6 py-2">
                                <div className="space-x-2">
                                    <Link to={`users/${user.idUser}   `}>
                                        Ver
                                    </Link>
                                    <button
                                        type="button"
                                        className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700"
                                    >
                                        Editar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
};

export default UsersList;
