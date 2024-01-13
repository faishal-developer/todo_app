'use client'
import React from 'react';
import useTodo from './todo.presenter';
import CustomModal from '../common/Modal';
import AddTodo from './commonPart';
import { status } from '@/utils/utils';
import { todoItem } from '@/store/todoSlice';
import { MdDelete } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';
import { getClassNames } from '@/helper/helper';


const TodoList = () => {
  const {date,validateNewTodo,submitEdit,changeModalHandle,show,setShow,closeModal,todos,colorfinderForStatus,addTodo,changeHandle,newTodo,removeTodo} =useTodo();

  return (
    <div className="max-w-lg h_90vh overflow-x-hidden mx-auto mt-8 p-6 bg-white shadow-md">
      <h1 className=" text-3xl font-extrabold mb-4">Todo List</h1>
      <div className="mb-4">
        <AddTodo
          newTodo={newTodo}
          changeHandle={changeHandle}
          validateNewTodo={validateNewTodo}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
        onClick={addTodo}
      >
        Add Todo
      </button>
      <ul className="mt-4">
        {todos.length>=1?(
          todos.map((todo:todoItem, index:number) => (
          <li
            key={index}
            className={`
              flex px-2 items-center border-b py-2 
              ${getClassNames(todo.time,date?.toString(),todo.status as string)}
            `}
          >
            <span className='w-36 break-words'>{todo?.title}</span>
            <span className='w-36 break-words'>{new Date(todo.time)?.toLocaleString()}</span>
            <span className={`${colorfinderForStatus(todo?.status as string)} w-20`}>{todo?.status}</span>
            <button
              className="text-red-500 mx-2 hover:text-red-600 focus:outline-none"
              onClick={() => removeTodo(todo.id as number)}
            >
              {<MdDelete/>}
            </button>
            <button
              className="text-amber-500 hover:text-amber-600 focus:outline-none"
              onClick={() => setShow({show:true,todo:todo})}
            >
              <FaEdit />
            </button>
          </li>
        ))
        ):(<h1 className='text-red-500 text-xl'>No todo created</h1>)}
      </ul>
          <CustomModal show={show.show} handleSubmit={submitEdit} handleClose={closeModal}>
            <>
              <AddTodo newTodo={show?.todo} changeHandle={changeModalHandle}/>
              <select
                id="select"
                name='status'
                onChange={changeModalHandle}
                className="mt-3 block w-full p-2 border rounded-md"
              >
                {Object.values(status).map(item=>(
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </>
          </CustomModal>
    </div>
  );
};

export default TodoList;
