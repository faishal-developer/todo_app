import React from 'react';
import CustomDateTimePicker from '../common/datetimePicker';
import { todoStyle as style } from './todo.tailwind';
import { loginStyle } from '../Login/login.tailwind';

const AddTodo = ({newTodo,changeHandle,validateNewTodo}:any) => {
    return (
        <div>
            <div>
                <input
                type="text"
                className={loginStyle.input}
                placeholder="Add a new todo"
                name='title'
                value={newTodo?.title}
                onChange={changeHandle}
              />
              <p className={style.error_msg}>{validateNewTodo?.title}</p>
            </div>
            <div>
              <CustomDateTimePicker value={newTodo?.time} onChange={changeHandle}/>
              <p className={style.error_msg}>{validateNewTodo?.time}</p>
            </div>
        </div>
    );
};

export default AddTodo;