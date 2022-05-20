import { useState } from 'react'

const AddCommentForm = ({ postId }) => {
    const [formData, setFormData] = useState({
        author: '',
        email: '',
        message: '',
    });

    const handleChangeData = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/comments/add', { method: 'POST', body: JSON.stringify({ ...formData, id: postId})})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="input" type="text" name="author" placeholder="Wpisz imię" value={formData.author} onChange={(e) => handleChangeData('author', e.target.value)} />
            <input className="input" type="email" name="email" placeholder="Wpisz email" value={formData.email} onChange={(e) => handleChangeData('email', e.target.value)}/>
            <textarea className="input" name="message" value={formData.message} onChange={(e) => handleChangeData('message', e.target.value)}></textarea>
            <button className="button" type="submit">Zapisz komentarz</button>
        </form>
    )
}

export default AddCommentForm;