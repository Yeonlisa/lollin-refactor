import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    nickname: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleNew = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
  }
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  const handleClose = () => {
    history.push('/');
  }


  return { handleChange, values, handleSubmit, errors, handleNew, handleClose };
};

export default useForm;
