import React from 'react';
import CustomDateTimePicker from '../common/datetimePicker';

const AddTodo = ({newTodo,changeHandle,validateNewTodo}:any) => {
    return (
        <div>
            <div>
              <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Add a new todo"
              name='title'
              value={newTodo?.title}
              onChange={changeHandle}
            />
            <p className='text-red-500 text-xs'>{validateNewTodo?.title}</p>
            </div>
            <div>
              <CustomDateTimePicker value={newTodo?.time} onChange={changeHandle}/>
              <p className='text-red-500 text-xs'>{validateNewTodo?.time}</p>
            </div>
        </div>
    );
};

export default AddTodo;