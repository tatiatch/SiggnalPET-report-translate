import * as React from "react";

const styles = {
    unchecked: {
        height: "1rem",
        width: "1rem",
        border: "1px solid",
        flexShrink: 0,
        borderRadius: "0.25rem",
        outline: "2px solid transparent",
        outlineOffset: "2px",
        cursor: "pointer",
        backgroundColor: "white",
        borderColor: "#0075b1",
        transitionProperty: "background-color",
        transitionDuration: "150ms",
    },
    checked: {
        height: "1rem",
        width: "1rem",
        border: "1px solid",
        flexShrink: 0,
        borderRadius: "0.25rem",
        outline: "2px solid transparent",
        outlineOffset: "2px",
        cursor: "pointer",
        backgroundColor: "#0075b1",
        borderColor: "#0075b1",
        transitionProperty: "background-color",
        transitionDuration: "150ms",
    },
    text: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "currentColor",
        pointerEvents: "none" as "none",
    },
    icon: {
        height: "1rem",
        width: "1rem",
    },
};

const Checkbox2 = ({
    checked,
    onCheckedChange,
}: {
    checked: boolean;
    onCheckedChange: () => void;
}) => {
    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            data-state={checked ? "checked" : ""}
            value="on"
            style={checked ? styles.checked : styles.unchecked}
            onClick={onCheckedChange}
        >
            <span data-state={checked ? "checked" : ""} style={styles.text}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={styles.icon}
                >
                    <path d="M20 6 9 17l-5-5"></path>
                </svg>
            </span>
        </button>
    );
};

export { Checkbox2 };
