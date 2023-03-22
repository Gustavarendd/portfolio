import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import FormInput from '../form-input/form-input.component';
import TextArea from '../form-input/form-textarea.component';

import { ContactContainer } from './contact.styles';
import { Button, BUTTON_TYPES } from '../button/button.component';

const defaultFormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, subject, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);

    emailjs
      .sendForm(
        'service_qrf1spf',
        'template_j08qmq5',
        form.current || '',
        'e6kkH-BNLS3rmLQLr',
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
    resetFormFields();
  };

  return (
    <ContactContainer>
      <h3>Contact me:</h3>
      <form ref={form} onSubmit={sendEmail}>
        <FormInput
          label="Name"
          required
          onChange={handleInputChange}
          type={'text'}
          name="name"
          value={name}
        />
        <FormInput
          label="Email"
          required
          onChange={handleInputChange}
          type={'email'}
          name="email"
          value={email}
        />
        <FormInput
          label="Subject"
          onChange={handleInputChange}
          type={'text'}
          name="subject"
          value={subject}
        />
        <TextArea
          label="Message"
          required
          onChange={handleInputChange}
          type={'text'}
          name="message"
          value={message}
        />
        <Button type="submit" value="send">
          SEND
        </Button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
