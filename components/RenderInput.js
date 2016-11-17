"use strict"

import React, { Component } from 'react';

const renderInput = field =>   // Define stateless component to render input and errors
    <div>
        <input {...field.input} type={field.type}/>
        {field.meta.touched && field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>

export default renderInput;


