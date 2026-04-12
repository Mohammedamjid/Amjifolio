import React, { useState } from 'react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xnnvalba', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitSuccess && (
        <div className="p-4 mb-4 rounded-md bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
            ${errors.name
              ? 'border-red-500 focus:ring-red-300 dark:border-red-400 dark:focus:ring-red-800'
              : 'border-gray-300 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-800'}
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
            ${errors.email
              ? 'border-red-500 focus:ring-red-300 dark:border-red-400 dark:focus:ring-red-800'
              : 'border-gray-300 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-800'}
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
            ${errors.subject
              ? 'border-red-500 focus:ring-red-300 dark:border-red-400 dark:focus:ring-red-800'
              : 'border-gray-300 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-800'}
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none transition-colors
            ${errors.message
              ? 'border-red-500 focus:ring-red-300 dark:border-red-400 dark:focus:ring-red-800'
              : 'border-gray-300 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-800'}
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
      </div>

      {/* Honeypot field for spam protection */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <div>
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
