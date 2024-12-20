import { CSSProperties, ReactNode } from "react";

interface ReportSectionInterface {
    children?: ReactNode;
    title: string | ReactNode;
    secondaryText?: string | ReactNode;
    style?: CSSProperties;
    contentWrapperStyle?: CSSProperties;
}

const styles = {
    container: {
        border: "1px solid #064c60",
    },
    headerContainer: {
        backgroundColor: "#064c60",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "1%",
        paddingRight: "3%",
    },
    titleText: {
        color: "#fff",
    },
    childrenWrapper: {
        display: "inline-grid",
        width: "100%",
    },
};

const ReportSection = (props: ReportSectionInterface) => {
    const { title, children, secondaryText, style, contentWrapperStyle } =
        props;
    return (
        <div style={{ ...styles.container, ...style }}>
            <div style={styles.headerContainer}>
                <span style={styles.titleText} translate="yes">
                    {title}
                </span>
                <span style={styles.titleText} translate="yes">
                    {secondaryText}
                </span>
            </div>
            <div style={{ ...styles.childrenWrapper, ...contentWrapperStyle }}>
                {children}
            </div>
        </div>
    );
};

export default ReportSection;
