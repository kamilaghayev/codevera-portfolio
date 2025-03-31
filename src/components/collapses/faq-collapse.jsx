'use client';
import React from 'react';
import { Collapse } from 'antd';

const faqs = [
  {
    question: 'What is a domain name?',
    answer: 'A domain name is the address of your website on the internet. For example, "www.example.com" is a domain name. Domain names make a website recognizable and accessible.',
  },
  {
    question: 'How to increase website speed?',
    answer: 'To increase website speed, you need to optimize image files, use CDN (Content Delivery Network), utilize caching technologies, and use minimal scripts.',
  },
  {
    question: 'How much does it cost to develop a website?',
    answer: 'The price of a website depends on the scope of work, type of website, number of pages, and functionality. Write us a request and our employees will contact you and provide you with a suitable offer.',
  },
  {
    question: 'Do you provide technical support for sites?',
    answer: 'We provide technical support services for all types of websites, optimizing site speed, fixing existing code errors, writing new features, and ensuring that the site operates 24/7.',
  },
  {
    question: 'Is mobile responsiveness considered during website development?',
    answer: 'The websites we create have a responsive design, meaning they are fully compatible with all types of phones, tablets, and desktops.',
  },
  {
    question: 'What programming language is used when developing a website?',
    answer: 'We do not use any templates to create websites, we create a custom design for each client and code the sites from scratch, using PHP (Laravel) as the programming language.',
  },
  {
    question: 'What is the difference between a website and a web application?',
    answer: 'A website is a collection of web pages that provide information, while a web application is an interactive program that allows users to perform specific tasks online, such as online banking or social networking.',
  },
];

const getItems = panelStyle => faqs.map((faq, index) => {
  return {
    key: index + 1,
    label: faq.question,
    children: <p>{faq.answer}</p>,
    style: panelStyle,
  };
})
export const FaqCollapse = () => {
  const panelStyle = {
    marginBottom: 24,
    background: '#F5F5F5',
    borderRadius: 20,
    border: 'none',
    fontWeight: '600',
  };
  return (
    <Collapse
      bordered={false}
      accordion
      style={{ background: 'transparent', width: '100%' }}
      items={getItems(panelStyle)}
      size='large'
    />
  );
};
