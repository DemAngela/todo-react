import React, {useState} from "react";

const TodoItem = ({todo, deleteTodo, handleEditTodo, handleChange }) => {
    const [edit,setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(todo.title)
    // const [checked,setChecked] = useState(false)

    const handleEdit = () => {
        if (!edit) {
            setEdit(!edit)
        }else {
            const newData = {...todo, title: editTitle}
            handleEditTodo(newData)
            setEdit(false)
        }
    }

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        handleChange(todo.id, isChecked);
    }

    return (
        <div className={'todoWrapper'}>
            <input className={'checkBox'} type="checkbox" checked={todo.completed} onChange={handleCheckboxChange} />
            <div className={'todoInner'}>
                { edit ?
                    <input className={'editInput'} type="text" defaultValue={todo.title} onChange={(e) => setEditTitle(e.target.value)} />
                    :
                    <h3 className={'todoTitle'}>{todo.title}</h3>
                }
            </div>
            <button className={'btnEdit'} onClick={handleEdit}>
                { edit ? 'Save' : 'Edit'}
            </button>
            <button className={'btnDelete'} onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    )
}

export default TodoItem