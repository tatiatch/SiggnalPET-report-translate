import { CSSProperties } from "react";
import { MapPinIcon } from "lucide-react";

const styles = {
    container: {
        borderRight: "2px solid #064c60",
        paddingRight: "2%",
    },
    title: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: 600,
    },
    addressText: {
        paddingLeft: "0.5rem",
    },
    addressTextWrapper: {
        display: "flex",
        flexDirection: "row" as "row",
    },
};

const AddressInfoSection = () => {
    return (
        <div style={styles.container}>
            <span style={styles.title}>Company1</span>
            <div style={styles.addressTextWrapper}>
                <MapPinIcon size={15} />
                <span style={styles.addressText}>Line1, Line2, City Yes</span>
            </div>
        </div>
    );
};

export default AddressInfoSection;
