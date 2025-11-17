import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';
import SubTitle from '../SubTitle/SubTitle';
import './style.scss'

const SectionContacts = () => {
    return (
        <section className="section__contacts">
        <div className="container">
            <SubTitle text="Contacts"/>
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