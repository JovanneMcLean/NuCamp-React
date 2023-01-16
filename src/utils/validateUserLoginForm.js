export const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 6) {
        errors.username = 'Must be at least 6 characters';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8) {
        errors.password = "Must be at least 8 characters";
    } else if (values.password.length > 25) {
        errors.password = "Must be 25 characters or less";
    }

    const reg = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ ;
    if (!reg.test(values.password)) {
        errors.password = 'Password should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long';
    }

    return errors;
};
