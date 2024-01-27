import { useState } from "react";


export const useForm = <T extends {}>(initialState: T) => {

    const [values, setValues] = useState<T>(initialState);

    const reset = () => setValues(initialState);

    const handleInputChange = ({ target }: any) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();


    }

    return [values, handleInputChange, reset];
}