import { useState } from 'react';


export default function Form({ liftGif }) {
    const [gif, setGif] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        liftGif(gif)
    }

    function handleChange(e) {
       setGif(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search: </label>
            <input type="text" name="title" placeholder="search gif" onChange={handleChange} value={gif} />
            <button type="submit">Search</button>
        </form>
    );
}