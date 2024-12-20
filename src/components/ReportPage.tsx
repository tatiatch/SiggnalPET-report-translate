import { ReactNode, CSSProperties } from "react";

interface ReportPageInterface {
    children?: ReactNode;
    style?: CSSProperties;
}

const styles = {
    container: {
        padding: "1rem",
        backgroundColor: "#fff",
        marginBottom: "1rem",
        width: "100%",
    },
};

const ReportPage = (props: ReportPageInterface) => {
    const { children, style } = props;
    return <div style={{ ...styles.container, ...style }}> {children}</div>;
};

export default ReportPage;
