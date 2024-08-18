import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = (currentState) => {
        setShowModal((currentState) => !currentState);
    }

    const modal = <Modal onChange={handleClose} value={showModal} actionBar={<Button primary onClick={() => handleClose(showModal)} >I accept</Button>}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>

    return (
        <div className="relative">
            <Button onClick={ handleClose } primary>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage