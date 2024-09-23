import Skills from '@/components/pages/Skills'
import Banner from './Banner'
import Navbar from './Navbar'
import About from '@/components/pages/About'
import Works from '@/components/pages/Works'

import Contact from '@/components/pages/Contact'
const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Skills />
            <Works />
            <About />
            <Contact />
        </div>
    )
}

export default MainLayout