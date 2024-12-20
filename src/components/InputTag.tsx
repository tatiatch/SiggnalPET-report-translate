import { ReactNode, CSSProperties } from "react";

const styles = {
    tagContainer: {
        display: "flex",
        flexDirection: "row" as "row",
        backgroundColor: "#e1f8ff",
        alignItems: "center",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        marginRight: "1rem",
        height: "fit-content",
        alignSelf: "center",
    },
    tagText: {
        marginLeft: "2%",
        textWrap: "nowrap" as "nowrap",
    },
    editableContainer: {
        width: "80%",
        margin: "auto",
        height: "5rem",
        overflowY: "auto" as "auto",
        justifyContent: "flex-start",
        border: "1px solid",
        borderRadius: "0.125rem",
        borderColor: "#E5E7EB",
        fontSize: "0.875rem",
        resize: "none" as "none",
        padding: "0.5rem",
        backgroundColor: "#EFF6FF",
        borderStyle: "none",
        color: "#000",
        marginTop: "1%",
        marginBottom: "1%",
    },
};

interface InputTagInterface {
    editable?: boolean;
    icon?: ReactNode;
    children?: ReactNode | string;
    style?: CSSProperties;
}

const InputTag = (props: InputTagInterface) => {
    const { icon, children, style, editable } = props;
    const isEditable = editable ?? false;

    return isEditable ? (
        <textarea
            style={{
                ...styles.tagContainer,
                ...styles.editableContainer,
                ...style,
            }}
            defaultValue={children?.toString()}
        ></textarea>
    ) : (
        <div style={{ ...styles.tagContainer, ...style }}>
            {icon}
            <span style={styles.tagText}>{children}</span>
        </div>
    );
};

export default InputTag;
