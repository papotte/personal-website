import axios from 'axios'
import {Input} from 'components/common'
import {ErrorMessage, FastField, Form, Formik} from 'formik'
import React from 'react'
import Recaptcha from 'react-google-recaptcha'
import * as Yup from 'yup'
import {Center, Error, InputField} from './styles'

const inputStyle = 'input is-primary'
export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
      recaptcha: '',
      success: false
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      email: Yup.string().email('Invalid email').required('Email field is required'),
      message: Yup.string().required('Message field is required'),
      recaptcha: Yup.string().required('Robots are not welcome yet!')
    })}
    onSubmit={async ({name, email, message}, {setSubmitting, resetForm, setFieldValue}) => {
      try {
        await axios({
          method: 'POST',
          url: `${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify({
            name,
            email,
            message
          })
        })
        setSubmitting(false)
        setFieldValue('success', true)
        setTimeout(() => resetForm(), 6000)
      } catch (err) {
        setSubmitting(false)
        setFieldValue('success', false)
        alert('Something went wrong, please try again!') // eslint-disable-line
      }
    }}
  >
    {({values, touched, errors, setFieldValue, isSubmitting}) => (
      <Form>
        <InputField>
          <Input
            as={FastField}
            className={inputStyle}
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Full name*"
            error={touched.name && errors.name}
          />
          <ErrorMessage component={Error} name="name" className="has-text-danger" />
        </InputField>
        <InputField>
          <Input
            as={FastField}
            id="email"
            aria-label="email"
            component="input"
            className={inputStyle}
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" className="has-text-danger" />
        </InputField>
        <InputField>
          <Input
            as={FastField}
            className={inputStyle}
            component="textarea"
            aria-label="message"
            id="message"
            rows="8"
            type="text"
            name="message"
            placeholder="Message*"
            error={touched.message && errors.message}
          />
          <ErrorMessage component={Error} name="message" className="has-text-danger" />
        </InputField>
        {values.name && values.email && values.message && (
          <InputField>
            <FastField
              component={Recaptcha}
              sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
              name="recaptcha"
              onChange={value => setFieldValue('recaptcha', value)}
            />
            <ErrorMessage component={Error} name="recaptcha" className="has-text-danger" />
          </InputField>
        )}
        {values.success && (
          <InputField>
            <Center className="has-text-success">
              <h4>Your message has been successfully sent, I will get back to you ASAP!</h4>
            </Center>
          </InputField>
        )}
        <Center>
          <button className="button is-dark-blue" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Center>
      </Form>
    )}
  </Formik>
)
