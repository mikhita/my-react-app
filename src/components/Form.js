import React, {useState} from 'react'

function Form() {
    // eslint-disable-next-line no-undef
    const [userName, setUserName] = useState(" ");
    const [comment, setComment] = useState("");
    const [topic, setTopic] = useState("React");
    const handlerUserNameChange = (event)=>{
        setUserName(event.target.value)
    }
    const handlerCommentChange = (event)=>{
        setComment(event.target.value)
    }
    const handlerTopicChange = (event)=>{
        setTopic(event.target.value)
    }
    const handleSubmit = (event)=>{
        alert(`${userName}, ${comment}, ${topic}`);
        event.preventDefault();
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Username</label>
            <input type="text" value={userName} onChange={handlerUserNameChange}/>
            <label htmlFor="" style={{display:"block"}}>Comments</label>
            <textarea name="" id="" cols="30" rows="10" value={comment}
            onChange={handlerCommentChange}></textarea>
        </div>
        <div>
        <label htmlFor="">Topic</label>
        <select name="" id="" value={topic} onChange={handlerTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default Form