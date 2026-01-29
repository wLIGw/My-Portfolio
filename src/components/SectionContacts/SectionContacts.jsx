import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';
import SubTitle from '../SubTitle/SubTitle';
import './style.scss';
import { useTranslation } from "react-i18next";

const SectionContacts = () => {
    const { t } = useTranslation();

    return (
        <section className="section__contacts">
            <div className="container">
                <SubTitle text={t("contacts")} />
                <div className="contacts">
                    <div className="contacts__left">
                        <ContactInfo />
                    </div>
                    <div className="contacts__right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionContacts;
