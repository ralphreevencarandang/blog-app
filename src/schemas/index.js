
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    title: yup.string().min(3, 'title should at least 3 characaters long').required('required'),
    content: yup.string().required('required')
});