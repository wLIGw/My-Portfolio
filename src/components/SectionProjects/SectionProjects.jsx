import { useTranslation } from "react-i18next";
import SubTitle from "../SubTitle/SubTitle";
import ProjectsList from "../ProjectsList/ProjectsList";
import "./style.scss";

const SectionProjects = () => {
  const { t } = useTranslation();

  return (
    <section className="section__projects">
      <div className="container">
        <SubTitle text={t("projects")} />
        <ProjectsList />
      </div>
    </section>
  );
};

export default SectionProjects;

