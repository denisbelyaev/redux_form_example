import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderInput from './RenderInput';
import validateContact from './validateContact';
import asyncValidate from './asyncValidate';
import {updateUser} from '../actions/actionForm';

class ContactForm extends Component {
    constructor() {
        super()

        this.mySubmit = this.mySubmit.bind(this)
        this.onSubmit = this.formSubmit.bind(this)
    }

    mySubmit() {
        //console.log(this.props);
        //this.refs.myform.submit();
        this.props.dispatch(updateUser('21'));
    }

    formSubmit(values, dispatch) {
        // Do something with the form values
        //console.log(values);
    //    return false;
    }

    render() {
        //console.log(this.props);
        const { handleSubmit } = this.props;
        return (
            <div>
                <button type="button" onClick={this.mySubmit}>Test Submit</button>
                <form ref="myform" onSubmit={handleSubmit(this.formSubmit)}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component={renderInput} type="text"/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component={renderInput} type="text"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component={renderInput} type="email"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

// Decorate the form component
ContactForm = reduxForm({
    form: 'contact', // a unique name for this form
    validate: validateContact,
    //Asynchronous validation will be called before the onSubmit
    //Asynchronous validation will not be called if synchronous validation is failing
    asyncValidate,
    asyncBlurFields: [ 'firstName' ]
})(ContactForm);

export default ContactForm;
