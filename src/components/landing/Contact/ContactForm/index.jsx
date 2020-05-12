import axios from 'axios'
import {Input} from 'components/common'
import {ErrorMessage, FastField, Form, Formik} from 'formik'
import {useIntl} from 'gatsby-plugin-intl'
import React from 'react'
import Recaptcha from 'react-google-recaptcha'
import * as Yup from 'yup'
import {Center, Error, InputField} from './styles'


function GetInput({name, error, component = 'input', rows}) {
  const intl = useIntl()
  return <InputField>
    <Input
      as={FastField}
      className={component + ' is-primary'}
      type="text"
      name={name}
      component={component}
      rows={rows}
      aria-label={name}
      placeholder={intl.formatMessage({id: `inputs.${name}.label`}) + '*'}
      error={error}
    />
    <div className="has-text-danger"><ErrorMessage name={name} /></div>
  </InputField>
}

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
        <GetInput name="name" error={touched.name && errors.name} />
        <GetInput name="email" error={touched.email && errors.email} />
        <GetInput name="message" error={touched.message && errors.message}
                  component="textarea"
                  rows="8" />
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
