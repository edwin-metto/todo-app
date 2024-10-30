import React from 'react';

const Form = ({ input, setInput, handleAddTask }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <form onSubmit={handleAddTask} className='color-white-100'>
            <input 
                type='text' 
                placeholder='Enter a task' 
                className='task'
                value={input}
                onChange={onInputChange}
            />
            <button className='button bg-yellow-500 py-1 m-2' type='submit'>Add</button>
        </form>
    );
};

export default Form;
