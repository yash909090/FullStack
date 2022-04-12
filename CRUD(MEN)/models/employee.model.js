"use strict";
exports.__esModule = true;
const mongoose = require('mongoose');
const {Constant} = require("../constant/constant");

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String,
        required: 'This field is required.'
    },
    city: {
        type: String,
        required: 'This field is required.'
    },
    age: {
        type: Number,
        required: 'This field is required.'
    },
    salary: {
        type: Number,
        required: 'This field is required.'
    }
});

// Custom validation for email
employeeSchema.path('email').validate((val) => {
    
    return Constant.emailRegex.test(val);
}, 'Invalid e-mail.');


employeeSchema.path('fullName').validate((val) => {
    
    return Constant.FullNameRegex.test(val);
}, 'Invalid fullname.');


employeeSchema.path('mobile').validate((val) => {
    
    return Constant.mobileRegex.test(val);
}, 'Invalid mobile.');


employeeSchema.path('city').validate((val) => {
    
    return Constant.cityRegex.test(val);
}, 'Invalid city.');


employeeSchema.path('age').validate((val) => {
    
    return Constant.ageRegex.test(val);
}, 'Invalid age.');


employeeSchema.path('salary').validate((val) => {
    
    return Constant.salaryRegex.test(val);
}, 'Invalid salary.');

mongoose.model('Employee', employeeSchema);