import React from 'react';
import MaxWidthContainer from '../shared/MaxWidthContainer';

// Reusable Card Component
const AboutCard = ({ title, content }) => {
    return (
        <div className="bg-gradient-to-br  to-neutral-700 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-ss-3xl rounded-ee-3xl hover:rounded-es-3xl hover:rounded-tr-3xl hover:rounded-ss-none  ">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
                {content}
            </p>
        </div>
    );
};

const About = () => {
    // About section data
    const aboutData = [
        {
            title: 'Who I Am',
            content:
                "Hi, I'm Safkat Sharif Sadli, a passionate frontend developer specializing in building interactive, modern web applications. My journey into the world of code has been driven by curiosity and a constant desire to learn.",
        },
        {
            title: 'What I Do',
            content:
                'I craft dynamic and responsive web apps using Next.js, React, and Tailwind CSS. My strength lies in creating seamless, intuitive user interfaces that are not only functional but also aesthetically pleasing.',
        },
        {
            title: 'My Experience',
            content:
                'From e-commerce platforms to task management apps, my experience ranges across multiple industries and project types. Every project I work on sharpens my skills and expands my knowledge of best practices.',
        },
    ];

    return (
        <section className="py-20 text-neutral-100">
            <MaxWidthContainer>
                <div className="text-start mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
                    <p className="mt-4 text-lg text-neutral-400">
                        A quick snapshot of who I am and what I do.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Render Cards Using Data */}
                    {aboutData.map((item, index) => (
                        <AboutCard
                            key={index}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>

                {/* <div className="text-center mt-12">
                    <a
                        href="mailto:safkatsadli@gmail.com"
                        className="text-lg font-semibold text-blue-500 hover:underline"
                    >
                        Get in Touch
                    </a>
                </div> */}
            </MaxWidthContainer>
        </section>
    );
};

export default About;
