import { ReactElement, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { todoStyle } from '../todoList/todo.tailwind';

type Iprops={
    show:boolean;
    handleClose?:()=>void;
    handleSubmit?:()=>void;
    children:ReactElement
}
function CustomModal({show,handleClose,handleSubmit,children}:Iprops) {

  return (
    <>
     <Modal show={show ?? false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            <button
              className={todoStyle.button}
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className={todoStyle.button}
              onClick={handleSubmit}
            >
              Save Changes
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;