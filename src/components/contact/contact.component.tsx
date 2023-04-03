import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import FormInput from '../form-input/form-input.component';
import TextArea from '../form-input/form-textarea.component';

import { ContactSection, FormContainer } from './contact.styles';
import { Button, BUTTON_TYPES } from '../button/button.component';

const defaultFormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [buttonState, setButtonState] = useState(false);
  const [isSending, setIsSending] = useState(false);
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
    setIsSending(true);

    emailjs
      .sendForm(
        'service_qrf1spf',
        'template_j08qmq5',
        form.current || '',
        'e6kkH-BNLS3rmLQL',
      )

      .then(
        result => {
          setIsSending(false);
          setButtonState(true);
          resetFormFields();
        },
        error => {
          alert('Something went wrong, please try again later.');
          setIsSending(false);
        },
      );
  };

  return (
    <ContactSection>
      <h3>Send me an Email</h3>
      <FormContainer>
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
            required
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
          {!buttonState ? (
            <Button type="submit" isLoading={isSending} value="send">
              Send Message
            </Button>
          ) : (
            <Button
              buttonType={BUTTON_TYPES.sentMessage}
              type="submit"
              isLoading={isSending}
              value="send"
            >
              Message was Sent!
            </Button>
          )}
        </form>
      </FormContainer>
    </ContactSection>
  );
};

export default Contact;
