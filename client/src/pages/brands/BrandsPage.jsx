import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BrandsList from "../../components/brads/BrandsList";
import FormBrand from "../../components/brads/FormBrand";
import SlideOver from "../../components/ui/SlideOver";
import Template from "../../components/ui/Template";
import { getAllBrandsAction } from "../../redux/brands/brands.actions";


const BrandsPage = () => {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllBrandsAction());
    }, []);

    return (
        <Template
            title="Marcas registradas"
            description="Aqui encontrara todas las marcas registradas en el sistema"
        >
            <SlideOver setOpen={setOpen} isOpen={isOpen} ><FormBrand/></SlideOver>
            <div>
                <div className="py-3">
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="px-3 py-2 text-white rounded-md bg-slate-800 hover:bg-slate-700"
                    >
                        Agregar marca
                    </button>
                </div>
                <BrandsList isOpen={isOpen} setOpen={setOpen} />
            </div>
        </Template>
    );
};

export default BrandsPage;
