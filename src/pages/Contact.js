import React, { useEffect, useState } from 'react';
import { usePageTitle } from '../contexts/PageTitleContext';
import '../styles/Contact.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box, IconButton } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material'; // Import social media icons

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required')
});

function Contact() {
  const { setPageTitle } = usePageTitle();
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      setSubmitted(true);
      formik.resetForm();
      setTimeout(() => setSubmitted(false), 3000);
    }
  });

  useEffect(() => {
    setPageTitle('Contact');
  }, [setPageTitle]);

  return (
    <div className="contact-container">
      {/* ... (keep existing contact info code) ... */}
      
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
        />
        
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Your Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
        />
        
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          margin="normal"
        />
        
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
          disabled={!formik.isValid || !formik.dirty}
        >
          Send Message
        </Button>
        
        {submitted && (
          <Box sx={{ mt: 2, color: 'success.main' }}>
            Message sent successfully!
          </Box>
        )}
      </form>

      {/* Social media links section */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton 
          color="primary" 
          href="https://github.com/sameerseeko" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <GitHub />
        </IconButton>

        <IconButton 
          color="primary" 
          href="https://twitter.com/sameerseeko" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Twitter />
        </IconButton>

        <IconButton 
          color="primary" 
          href="https://linkedin.com/in/MuhammadSameer" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </div>
  );
}

export default Contact;
