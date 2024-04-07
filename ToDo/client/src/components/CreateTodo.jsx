import React, { useContext, useState } from "react";
import { Modal } from "flowbite-react";
import { UserContext } from "../UserContext";
import {
  HiOutlineXCircle,
  HiCheckBadge,
  HiInformationCircle,
} from "react-icons/hi2";
import { MdOutlineWarning } from "react-icons/md";

const CreateTodo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [clearModal, setClearModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { user, addTodo, clearCompletedTodos, showAlert } =
    useContext(UserContext);

  // Handling add todo
  const handleAdd = async () => {
    try {
      addTodo(user._id, title, description);
      setTitle("");
      setDescription("");
      showAlert({
        color: "green",
        icon: HiCheckBadge,
        title: "Todo added successfully",
        description: null,
      });
    } catch (error) {
      console.error(error);
      showAlert({
        color: "failure",
        icon: HiOutlineXCircle,
        title: "Failed to add todo",
        description: null,
      });
    }
  };

  // Handling clear completed todos
  const handleClear = async () => {
    try {
      const todos = user?.todos;
      if (todos.length === 0) {
        showAlert({
          color: "info",
          icon: HiInformationCircle,
          title: "No todos to clear!",
          description: null,
        });
        setClearModal(false);
        return;
      }
      const completedTodos = user?.todos?.filter(
        (todo) => todo.isCompleted === true,
      );
      if (completedTodos && completedTodos.length === 0) {
        showAlert({
          color: "warning",
          icon: MdOutlineWarning,
          title: "No completed todos to clear!",
          description: null,
        });
        setClearModal(false);
        return;
      }
      clearCompletedTodos(user._id);
      setClearModal(false);
      showAlert({
        color: "success",
        icon: HiCheckBadge,
        title: "Todos cleared successfully",
        description: null,
      });
    } catch (error) {
      console.error(error);
      showAlert({
        color: "failure",
        icon: HiOutlineXCircle,
        title: "Failed to clear todos",
        description: null,
      });
    }
  };

  return (
    <>
      <div className="mb-8 mt-20 flex flex-row items-center justify-center space-x-2">
        <button
          onClick={() => setOpenModal(true)}
          className="flex rounded-md border-0 bg-blue-400 px-4 py-4 text-white hover:bg-blue-500 focus:border-0 focus:ring-0"
        >
          <img src="/plus-icon.svg" alt="" className="h-6 w-6" />
          <span className="pl-2 text-xl font-bold">Add Todo</span>
        </button>
        <button
          onClick={() => setClearModal(true)}
          className="flex rounded-md border-0 bg-blue-400 px-4 py-4 text-white hover:bg-blue-500 focus:border-0 focus:ring-0"
        >
          <img src="/broom.svg" alt="" className="h-6 w-6" />
          <span className="pl-2 text-xl font-bold">Clear</span>
        </button>
      </div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add new todo</Modal.Header>
        <Modal.Body>
          <form action="#">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="mb-4 w-full rounded-md border-2 border-gray-200 p-2"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="mb-4 w-full resize-none rounded-md border-2 border-gray-200 p-2"
            ></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="flex rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
            type="submit"
            onClick={() => {
              handleAdd();
              setOpenModal(false);
            }}
          >
            Create
          </button>
          <button
            className="flex rounded-md bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={clearModal} onClose={() => setClearModal(false)} dismissible>
        <Modal.Header>Clear Todos</Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to clear the completed todos?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="rounded-md bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
                onClick={() => handleClear()}
              >
                Yes, Clear
              </button>
              <button
                className="rounded-md bg-gray-500 px-4 py-2 font-semibold text-white hover:bg-gray-600"
                onClick={() => setClearModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateTodo;
