export default {
    required: (v, fieldName = "") =>
    !!v || parseInt(v) === 0 || `${fieldName} is required`
};