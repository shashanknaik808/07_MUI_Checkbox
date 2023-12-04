import React from 'react';
import { TextField, Button } from '@mui/material';

function Test() {

    const [name, setName] = useState("");

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField name='name' value={inputs.name}
                    onChange={handleChange} type={'text'}
                    sx={{ margin: 3 }} placeholder='Name' variant='outlined' />
                <TextField name='email' value={inputs.email}
                    onChange={handleChange} type={'email'}
                    sx={{ margin: 3 }} placeholder='Email' variant='standard' />
                <TextField name='password' value={inputs.password}
                    onChange={handleChange} type={'password'}
                    sx={{ margin: 3 }} placeholder='Password' variant='filled' />

                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default Test;