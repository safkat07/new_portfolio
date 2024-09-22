
import MaxWidthContainer from '../shared/MaxWidthContainer';
import { Card, Carousel } from '../ui/apple-cards-carousel';
import img1 from '../../assets/web_clara_vista.png'
import img2 from '../../assets/web_hunger.png'

const Works = () => {
    const items = [
        {
            title: "Project One",
            category: "Web Development",
            content: "Description of Project One.",
            src: img1, // Use a valid image URL
        },
        {
            title: "Project Two",
            category: "Mobile App",
            content: "Description of Project Two.",
            src: img2, // Replace with valid URL
        },
        {
            title: "Project Three",
            category: "Web Development",
            content: "Description of Project Three.",
            src: img2, // Replace with valid URL
        },
    ];

    return (
        <div className='h-screen text-4xl text-neutral-400'>
            <MaxWidthContainer className={'my-10'}>
                <h2 className='text-end mb-10'>My Works</h2>
                <Carousel items={items.map(item => <Card key={item.title} card={item} layout={true} />)} />
            </MaxWidthContainer>
        </div>
    );
}

export default Works;
