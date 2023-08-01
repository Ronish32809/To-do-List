import './task.css';

const Task = (props) => {
    return (
        <div className="task" style={{ backgroundColor: props.completed ? "green" : "#eaabd2" }}>
            <h1>{props.taskName}</h1>
            <button className='button' onClick={() => props.handleUpdate(props.id)}>Complete</button>
            <button className='button' onClick={() => props.handleDelete(props.id)}>X</button>
        </div>
    );
};

export default Task;
