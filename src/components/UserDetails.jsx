/* eslint-disable react/prop-types */
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function UserDetails({ isOpen, closeModal, user }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="User Details Modal"
      style={{
        content: {
          width: "280px",
          height: "320px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      {user && (
        <div className="user-details-container">
          <h2>User Details</h2>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <button onClick={closeModal} className="user-details-button">
            Close
          </button>
        </div>
      )}
    </Modal>
  );
}
