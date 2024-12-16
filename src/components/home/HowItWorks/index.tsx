import React from 'react';
import Container from '../../common/Container';
import Step from './Step';
import { steps } from './steps-data';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How SimpliMail Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <Step
              key={step.title}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}