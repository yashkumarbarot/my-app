import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank")
        }

        addTodo(title, desc);
    }
    return (
        <div className="container my-3">
            <h3>Add a TODO</h3>
            <form onSubmit={submit} >
                <div className="form-group">
                    <label htmlFor="Title">TODO Title </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className="form-control" id="title" aria-describedby="emailHelp" placeholder="TODO Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">TODO Desc</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}
                        className="form-control" id="desc" placeholder="TODO Desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">ADD TODO</button>
            </form>
        </div>
    )
}
