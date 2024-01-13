'use client'
import React ,{ useEffect} from 'react';
import useTodo from './todo.presenter';
import CustomModal from '../common/Modal';
import AddTodo from './commonPart';
import { status } from '@/utils/utils';
import { todoItem } from '@/store/todoSlice';
import { MdDelete } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';
import { getClassNames } from '@/helper/helper';
import { todoStyle as style} from './todo.tailwind';

const TodoList = () => {
  // states and logic handler
  const {date,validateNewTodo,submitEdit,changeModalHandle,show,setShow,closeModal,todos,colorfinderForStatus,addTodo,changeHandle,newTodo,removeTodo} =useTodo();

  return (
    <div className={style.todo_cont}>
      <h1 className={style.heading}>Todo List</h1>
      {/* Add to todo section */}
      <div className="mb-4">
        <AddTodo
          newTodo={newTodo}
          changeHandle={changeHandle}
          validateNewTodo={validateNewTodo}
        />
      </div>
      <button
        className={style.button}
        onClick={addTodo}
      >
        Add Todo
      </button>

      {/* todo list section */}
      <ul className="mt-4">
        {todos.length>=1?(
          todos.map((todo:todoItem, index:number) => (
          <li
            key={index}
            className={`
              ${style.li} 
              ${getClassNames(todo.time,date?.toString(),todo.status as string)}
            `}
          >
            <span className={style.title}>{todo?.title}</span>
            <span className={style.time}>{new Date(todo.time)?.toLocaleString()}</span>
            <span className={`${colorfinderForStatus(todo?.status as string)} w-20`}>{todo?.status}</span>
            <button
              className={style.deleteBtn}
              onClick={() => removeTodo(todo.id as number)}
            >
              {<MdDelete/>}
            </button>
            <button
              className={style.editBtn}
              onClick={() => setShow({show:true,todo:todo})}
            >
              <FaEdit />
            </button>
          </li>
        ))
        ):(<h1 className={style.no_todo}>No todo created</h1>)}
      </ul>
      {/* modal section */}
          <CustomModal show={show.show} handleSubmit={submitEdit} handleClose={closeModal}>
            <>
              <AddTodo newTodo={show?.todo} changeHandle={changeModalHandle}/>
              <select
                id="select"
                name='status'
                onChange={changeModalHandle}
                className={style.select}
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
