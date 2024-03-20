import React from 'react'
import "./Modal.css";
import Modal from 'react-awesome-modal';

export default function MyModal({ isShow, setIsShow }) {
  const toggleModal = () => {
    setIsShow(!isShow);
  };

  return (
    <Modal
      visible={isShow}
      width='450'
      height='550'
      effect='fadeInUp'
      onClickAway={() => toggleModal()}
      className="modal"
    >
      <div className=''>
        <button onClick={() => toggleModal()} className='close-modal'>
          Close
        </button>
        <form
          className=''
          action='https://formsubmit.co/info@ispaceng.com'
          method='POST'
        >
          <h1>
            Contact <span>Here</span>
          </h1>
          <input
            type='text'
            name='name'
            id=''
            required
            placeholder='Full Name'
          ></input>
          <input
            type='email'
            name='email'
            id=''
            required
            placeholder='email'
          ></input>
          <input type='phone' name='phone' id='' placeholder='Phone'></input>
          <textarea
            name='message'
            cols='30'
            rows='10'
            id=''
            required
            placeholder="Let's hear you"
          ></textarea>
          <button className='send-btn justify-center ml-28' type='submit'>
            Send
          </button>
        </form>
      </div>
    </Modal>
  );
}

