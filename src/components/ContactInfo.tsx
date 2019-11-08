import {FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";
import * as React from 'react'


const ContactInfo =() => {
    return (
        <div className='contactInfo'>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </div>
    )
}

export default ContactInfo;
