export default function validateContact(data, props) {
    const errors = {};
    if(!data.firstName) {
        errors.firstName = 'Required';
    }
    if(!data.lastName) {
        errors.lastName = 'Must be fewer than 50 characters';
    }
    if(!data.email) {
        //errors.email = 'Required';
    } else if(!/\d{3}-\d{3}-\d{4}/.test(data.email)) {
        //errors.email = 'Phone must match the form "999-999-9999"'
    }
    return errors;
}