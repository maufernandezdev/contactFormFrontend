const HOST = 'https://contact-form-backend-rho.vercel.app';
const sendForm = async (formData) =>
{
    const method = 'POST'
    const path = '/api/v1/contact'
    const headers = { 'Content-type': 'application/json' }

    const body = JSON.stringify(formData);
    try
    {
        const response = await fetch(HOST + path , {method, headers, body});
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}

export default sendForm;