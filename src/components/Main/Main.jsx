import SectionSkills from '../SectionSkills/SectionSkills';
import SectionProjects from '../SectionProjects/SectionProjects';
import AboutMe from '../AboutMe/AboutMe';
import SectionContacts from '../SectionContacts/SectionContacts';
import './style.scss'

const Main = () => {
    return ( 
        <main className="main">
            <AboutMe />
            <SectionSkills />
            <SectionProjects />
            <SectionContacts />
        </main>
    );
}

export default Main;