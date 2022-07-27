import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EgressesList from "../../components/egresses/EgressesList";
import Template from "../../components/ui/Template";
import { getAllEgressesAction } from "../../redux/egresses/egresses.action";


const EgressesPage = () => {
    const dispatch: (dispatch: any) => Promise<void> = useDispatch();
    useEffect(() => {
        (() => {
            dispatch(getAllEgressesAction());
        })();
    }, []);

    return (
        <Template title="Egresos" description="Lista de egresos">
            <div>
                <EgressesList />
            </div>
        </Template>
    );
};

export default EgressesPage;
