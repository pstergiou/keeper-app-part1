import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({ title: "", content: "" });

  function handleChange(event) {
    const {name,value} = event.target;

    setNote((prevNote) => {
      return {...prevNote, [name] : value}
    });
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={() => {
            props.onAdd(note);
            setNote({title: "", content: ""})
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
