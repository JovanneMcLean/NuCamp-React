

export const validateCommentForm = (values) => {
    const errors = {};

    if (!values.rating) {errors.rating = 'Required';}

    if (values.author.length < 2 || values.author.length > 15) {
        errors.author = 'Must be atleast 2 and not more than 15 characters';}
    return errors;
};

