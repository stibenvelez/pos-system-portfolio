import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

// Redux
import { useDispatch } from "react-redux";
import Modal from "../../ui/Modal";
import FormEditItemDetailSale from "./FormEditItemDetailSale";
import { removeItemFromSaleDetailAction } from "../../../redux/sales/sales.action";

const ItemSailDetail = ({ detail }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch();

    const handleRemoveItem = (item) => {
        dispatch(removeItemFromSaleDetailAction(item.id));
    };
    
    const onClose = () => {
        setModalOpen(false);
    };

    return (
        <tr className="text-gray-700 border-b hover:bg-gray-50 hover:shadow-md">
            <td className="px-6 py-3 capitalize">{detail.productName}</td>
            <td className="px-6 py-3">{detail.quantity}</td>
            <td className="px-6 py-3">{detail.unitPrice}</td>
            <td className="px-6 py-3">{detail.totalPrice}</td>
            <td className="px-6 py-3">{detail.commissionValue}</td>
            <td className="px-6 py-3">
                <button
                    type="button"
                    className="p-2 transition hover:text-red-600 transition-duration: 150ms "
                    onClick={() => handleRemoveItem(detail)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                    type="button"
                    className="p-2 transition hover:text-blue-600 transition-duration: 150ms "
                    onClick={() => setModalOpen(true)}
                >
                    <FontAwesomeIcon icon={faPencil} />
                </button>
            </td>
            <Modal modalOpen={modalOpen} onCancel={() => setModalOpen(false)}>
                <FormEditItemDetailSale product={detail} onClose={onClose}/>
            </Modal>
        </tr>
    );
};

export default ItemSailDetail;
