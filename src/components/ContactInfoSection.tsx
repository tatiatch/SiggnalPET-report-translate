import { ReactNode, CSSProperties } from "react";
import { MailIcon, PhoneIcon } from "lucide-react";
import InputTag from "./InputTag";

const styles = {
    sectionContainer: {
        display: "flex",
        flexDirection: "row" as "row",
        borderRight: "2px solid #064c60",
    },
};

interface ContactInfoSectionInterface {
    style?: CSSProperties;
}

const ContactInfoSection = (props: ContactInfoSectionInterface) => {
    return (
        <div style={{ ...styles.sectionContainer, ...props.style }}>
            <InputTag icon={<MailIcon size={15} />}>test@dummy.com</InputTag>
            <InputTag icon={<PhoneIcon size={15} />}>+1 7894561234</InputTag>
        </div>
    );
};

export default ContactInfoSection;
