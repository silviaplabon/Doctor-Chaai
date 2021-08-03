import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './CustomForm.scss'
const CustomForm = ({url}) => {
    return (
        <MailchimpSubscribe  url={url} />
    );
};

export default CustomForm;