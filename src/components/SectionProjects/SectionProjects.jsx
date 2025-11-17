import Card from '../Card/Card';
import SubTitle from '../SubTitle/SubTitle';
import projectsData from '../../data/projects.json';
import './style.scss'
import ProjectsList from '../ProjectsList/ProjectsList';

const SectionProjects = () => {
    return (
        <section className="section__projects">
                <div className="container">
                    <SubTitle text="Projects" />
                    <ProjectsList />
                </div>
            </section>
    );
}

export default SectionProjects;