import meImg from '../assets/Me.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiJavascript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

// Social Icons Component
const Social = () => {
    const socialLinks = [
        { href: "https://github.com/safkat07", icon: <FaGithub />, label: "GitHub" },
        { href: "https://www.linkedin.com/in/safkat-sharif-sadli/", icon: <FaLinkedin />, label: "LinkedIn" },
        { href: "https://leetcode.com/u/Safkat07/", icon: <SiLeetcode />, label: "LeetCode" }
    ];

    return (
        <div className="flex gap-4 text-3xl text-neutral-400 mt-4">
            {socialLinks.map(({ href, icon, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 transition duration-300"
                    aria-label={label}
                >
                    {icon}
                </a>
            ))}
        </div>
    );
};

// Tech Stack Component
const TechStack = () => {
    const techStack = [
        { name: 'JavaScript', icon: <SiJavascript className="inline-block text-yellow-500" /> },
        { name: 'React', icon: <SiReact className="inline-block text-blue-500" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="inline-block text-green-500" /> },
        { name: 'MongoDB', icon: <SiMongodb className="inline-block text-green-700" /> },
        // Add more technologies as needed
    ];

    return (
        <div className="flex flex-wrap justify-center mt-4 text-lg text-gray-300">
            {techStack.map((tech) => (
                <span key={tech.name} className="mx-2 flex items-center">
                    {tech.icon} <span className="ml-1">{tech.name}</span>
                </span>
            ))}
        </div>
    );
};

// Banner Component
const Banner = () => {
    return (
        <div className=" h-screen flex justify-center items-center">
            <div className='flex flex-col justify-center items-center text-center'>
                <img src={meImg} alt="Safkat Sharif Sadli" />
                <h1 className='text-neutral-400 uppercase tracking-widest text-5xl font-semibold'>
                    Safkat Sharif <span className='font-bold text-indigo-400'>Sadli</span>
                </h1>
                <p className='mt-4 lg:max-w-2xl max-w-xl  text-lg text-gray-300 leading-6'>
                    A passionate tech enthusiast with a love for solving complex problems and transforming ideas into real-world solutions.
                    With a focus on creating impactful and innovative projects.
                </p>
                <Social />
                {/* <TechStack /> */}
            </div>
        </div>
    );
}

export default Banner;
