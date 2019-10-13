import React, { useContext } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import useToggleState from "./hooks/useToggleState"
import EditTodoForm from "./editTodoForm"
import { TodosContext } from "./contexts/todos.context"

function Todo({ id, task, completed }) {
    const { removeTodo, toggleTodo } = useContext(TodosContext)
    const [isEditing, toggle] = useToggleState(false)
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm
                    id={id}
                    task={task}
                    toggleEditForm={toggle}
                />
            ) : (
                    <>
                        <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
                        <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="Edit" onClick={toggle}>
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                )}
        </ListItem>
    )
}

export default Todo