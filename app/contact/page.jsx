"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 949 337 2157",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kevin.wu.sde@gmail.com",
  },
  // {
  //   icon: <FaMapMarkerAlt />,
  //   title: "Address",
  //   description: "16899 Jamboree Road Apt 229",
  // },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleServiceChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      service: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="flex-1 xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Fill out the form below to get in touch with me.
              </p>
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="First name" value={formData.firstname} onChange={handleChange} required />
                <Input type="text" name="lastname" placeholder="Last name" value={formData.lastname} onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
                <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
              </div>
              {/* select */}
              <Select name="service" onValueChange={handleServiceChange} value={formData.service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="How Can I Help?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Full-Stack Development</SelectItem>
                    <SelectItem value="ui">Front-End Development</SelectItem>
                    <SelectItem value="other">Back-End Development</SelectItem>
                    <SelectItem value="other">Data Analysis</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* submit button */}
              <Button type="submit" className="max-w-40" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;