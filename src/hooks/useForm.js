import { useState } from "react";

//хук управления формой
export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
  
    const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      setValues({...values, [name]: value});
    };
  
    return {values, handleChange, setValues};
};
