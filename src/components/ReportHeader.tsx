import { reportHeader } from "../utils/constants";
import TranslateWrapper from "./translateWrapper";

const styles = {
    container: {
        backgroundColor: "#064c60",
        display: "flex",
        flexDirection: "row" as "row",
        justifyContent: "space-between",
        padding: "1rem",
        width: "100%",
    },
    logo: {
        width: "10rem",
    },
    secondaryText: {
        color: "#fff",
    },
};

const ReportHeader = () => {
    return (
        <TranslateWrapper>
        <div style={styles.container}>
            <img
                alt="Logo"
                src={require("../static/logo.png")}
                style={styles.logo}
            />
            <span style={styles.secondaryText} translate="yes">
                Instant Point-of-Care Radiology Results
            </span>
        </div>
        </TranslateWrapper>
    );
};

export default ReportHeader;
