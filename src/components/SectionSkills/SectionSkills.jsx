import Skills from '../Skills/Skills';
import SubTitle from '../SubTitle/SubTitle';
import './style.scss';
import { useTranslation } from "react-i18next";

const SectionSkills = () => {
    const { t } = useTranslation();

    return (  
        <section className="section__skills">
            <div className="container">
                <SubTitle text={t("skills")} />
                <div className="skills__wrapper">
                    <Skills />
                </div>
            </div>
        </section>
    );
}
 
export default SectionSkills;
