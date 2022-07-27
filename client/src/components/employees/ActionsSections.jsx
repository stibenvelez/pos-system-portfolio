import React from 'react'
import Card from '../ui/Card/Card';
import EmployeeDetail from './EmployeeDetail';
import FormAddNewEmploye from './FormAddNewEmploye';

const ActionsSections = ({ optionsState, setOptionsState }) => {
    const renderAddEmployeeForm = () => {
        return <FormAddNewEmploye setOptionsState={setOptionsState} />;
    };

    const renderVieEmploye = () => {
        return <EmployeeDetail setOptionsState={setOptionsState} />;
    };

    const renderMain = () => {
        switch (optionsState) {
            case "addEmploye":
                return renderAddEmployeeForm();
            case "viewEmploye":
                return renderVieEmploye();

            default:
                return <div></div>;
        }
    };
    return renderMain();
};

export default ActionsSections;