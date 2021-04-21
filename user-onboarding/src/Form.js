import React from 'react';

export default function Form(props) {
    const { values, submit, change, disable, errors} = props;

    const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Friend</h2>

                <button disabled={disabled}>Submit</button>

            <div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                </div>   
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>
                <label>Username:
                 <input
                 value={values.username}
                 onChange={onChange}
                 name='username'
                 type='text'
                 />
                </label>
            </div>
        </form>
    )
}