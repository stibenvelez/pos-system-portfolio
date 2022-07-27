import { FC } from 'react'

type ButtonType = {
    value: string,
    label?: string,
    onClick?:any;
}



const Button: FC<ButtonType> = ({ value, onClick, ...res}) => {
    return (
        <div
            className="inline-flex px-3 py-2 text-white rounded-md cursor-pointer bg-slate-800 hover:bg-slate-700"
            onClick={onClick}
            {...res}
        >
            {value}
        </div>
    );
};

export default Button