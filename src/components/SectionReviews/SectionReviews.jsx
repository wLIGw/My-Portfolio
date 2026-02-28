import { useTranslation } from "react-i18next";
import SubTitle from "../SubTitle/SubTitle";
import "./style.scss";
import Reviews from "../Reviews/Reviews";
import PlatformsBlock from "../PlatformsBlock/PlatformsBlock";

const SectionReviews = () => {
  const { t } = useTranslation();

  return (
    <section className="section__reviews">
      <div className="container">
        <SubTitle text={t("reviews")} />
        <PlatformsBlock />
        <Reviews />
      </div>
    </section>
  );
};

export default SectionReviews;
