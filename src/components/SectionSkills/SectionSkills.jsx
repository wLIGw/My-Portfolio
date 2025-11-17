import Skills from '../Skills/Skills';
import SubTitle from '../SubTitle/SubTitle';
import './style.scss'

const SectionSkills = () => {
    return (  
            <section className="section__skills">
                <div className="container">
                    <SubTitle text="My Skills"/>
                    <div className="skills__wrapper">
                        <Skills />
                    </div>
                </div>
            </section>
    );
}

export default SectionSkills;