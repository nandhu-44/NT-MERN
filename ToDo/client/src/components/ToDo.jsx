import React, { useContext, useState } from "react";
import { Modal } from "flowbite-react";
import { UserContext } from "../UserContext";

const ToDo = ({ _id, title, description, isCompleted }) => {
  const { user, editTodo, deleteTodo } = useContext(UserContext);
  const [status, setStatus] = useState(isCompleted);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);

  const handleEdit = async () => {
    const userId = user._id;
    const response = await editTodo(
      userId,
      _id,
      newTitle,
      newDescription,
      status,
    );
    if (response.status === 200) {
      setTitle(newTitle);
      setDescription(newDescription);
    } else {
      alert("Failed to update todo");
    }
  };

  const handleDelete = async () => {
    const userId = user._id;
    const response = await deleteTodo(userId, _id);
    if (response.status === 200) {
      setTitle(newTitle);
      setDescription(newDescription);
    } else {
      alert("Failed to delete todo");
    }
  };

  const handleComplete = async () => {
    const userId = user._id;
    const response = await editTodo(
      userId,
      _id,
      newTitle,
      newDescription,
      !status,
    );
    if (response.status === 200) {
      setStatus(!status);
    } else {
      alert("Failed to update todo");
    }
  };

  return (
    <div
      id={_id}
      className={`my-2 flex items-center justify-between rounded-lg p-4 text-white ${
        status ? "bg-green-400" : "bg-blue-400"
      }`}
    >
      <div className={`flex flex-col ${status ? "line-through" : ""}`}>
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex items-center">
        <button
          className="m-1 rounded-lg bg-amber-500 p-2 text-white"
          onClick={() => setShowModal(true)}
        >
          <img src="/pencil-icon.svg" className="h-6 w-6" alt="" />
        </button>
        <button
          className="rounded-lg bg-red-500 p-2 text-white"
          onClick={() => setDeleteModal(true)}
        >
          <img src="/dustbin.svg" className="h-6 w-6" alt="" />
        </button>
        <input
          type="checkbox"
          name="completed"
          checked={status}
          onChange={handleComplete}
          className="m-3 h-6 w-6 rounded-sm border-0 bg-white p-2 focus:accent-green-400 ring-0 focus:outline-none focus:ring-0 focus:border-0"
        />
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} dismissible>
        <Modal.Header>Edit Todo</Modal.Header>
        <Modal.Body>
          <form action="#">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="mb-4 w-full rounded-md border-2 border-gray-200 p-2"
            />
            <textarea
              value={newDescription}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="mb-4 w-full resize-none rounded-md border-2 border-gray-200 p-2"
            ></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="flex rounded-md bg-yellow-300 px-4 py-2 font-semibold text-white hover:bg-yellow-400"
            type="submit"
            onClick={() => {
              handleEdit();
              setShowModal(false);
            }}
          >
            Update
          </button>
          <button
            className="flex rounded-md bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={deleteModal}
        onClose={() => setDeleteModal(false)}
        dismissible
      >
        <Modal.Header>Delete Todo</Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete "{title}" ?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="rounded-md bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
                onClick={handleDelete}
              >
                Yes, Delete
              </button>
              <button
                className="rounded-md bg-gray-500 px-4 py-2 font-semibold text-white hover:bg-gray-600"
                onClick={() => setDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ToDo;
