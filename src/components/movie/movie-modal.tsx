// import react from 'react';
import Modal from "react-modal";

function MovieModal(props: any) {
    return (
        <Modal isOpen={props.modal} onRequestClose={props.closeModal} contentLabel="Movie">
        <button onClick={() => props.closeModal()}>Close</button>
      </Modal>
    )
}

export default MovieModal;