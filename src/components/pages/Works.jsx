
import MaxWidthContainer from '../shared/MaxWidthContainer';
import { Card, Carousel } from '../ui/apple-cards-carousel';
import img2 from '../../assets/web_01.png'
import img1 from '../../assets/web_02.png'
import img3 from '../../assets/web_03.png'
import img4 from '../../assets/android_app.jpg'
const Works = () => {
    const items = [
        {
            title: "Hunger",
            category: "Web Development",
            content: "A visually stunning and highly functional frontend web application aimed at addressing food scarcity. Featuring responsive layouts and interactive features, 'Hunger' is prepared for backend integration and showcases a user-friendly design, proving my capability to deliver production-ready solutions.",
            src: img2,
            liveLink: 'https://hunger-cafe-virid.vercel.app/',
            githubLink: 'https://github.com/safkat07/Hunger-nextjs-'
        },
        {
            title: "Clara-Vista",
            category: "Web Development",
            content: "A sleek and modern e-commerce website designed for selling goggles. 'Clara-Vista' integrates advanced animations powered by GSAP for an engaging user experience, while remaining fully responsive and cross-browser compatible. It's a perfect blend of creativity and functionality.",
            src: img1,
            liveLink: 'https://beamish-strudel-038ba5.netlify.app/',
            githubLink: 'https://github.com/safkat07/Clara-Vista'
        },
        {
            title: "The Kitchen",
            category: "Web Development",
            content: "A beautifully designed frontend project that showcases 'The Kitchen', with multiple sections ready for backend integration. The project focuses on providing an exceptional user experience with a harmonious color palette, stylish typography, and structured layouts.",
            src: img3,
            liveLink: 'https://thekitchen-778bb.web.app/',
            githubLink: 'https://github.com/safkat07/Kitchen-Tools'
        },
        {
            title: "Quick ToDo",
            category: "Mobile Development",
            content: "A minimalist yet powerful mobile app designed to simplify task management. 'Quick ToDo' allows users to effortlessly add, delete, and mark tasks as complete with an intuitive UI. Featuring smooth transitions, this app elevates the everyday to-do list into a delightful experience, combining functionality with a polished, modern design.",
            src: img4,
            liveLink: 'https://drive.google.com/file/d/1GB24lcRGL4-y6CRzr6xwlSnTHYLPJXx8/view',
            githubLink: 'https://github.com/safkat07/Quick_Check'
        }
    ];


    return (
        <div className='h-screen text-4xl text-neutral-400'>
            <MaxWidthContainer className={'my-10'}>
                <h2 className="text-4xl text-end md:text-5xl font-bold text-white">About Me</h2>
                <Carousel items={items.map(item => <Card key={item.title} card={item} layout={true} />)} />
            </MaxWidthContainer>
        </div>
    );
}

export default Works;
