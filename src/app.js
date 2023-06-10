import axios from 'axios';

const handleSubmit = async () => {
    // ...

const form = document.querySelector('form');
    form.addEventListener('submit', async event => {
    event.preventDefault();

    const title = document.querySelector('#new-todos__title').value;
    
    const response = await axios.post(`${BASE_URL}/todos`, todo);
    });
};
