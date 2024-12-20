import ReportSection from "./ReportSection";
import AddressInfoSection from "./AddressInfoSection";
import ContactInfoSection from "./ContactInfoSection";
import ParentDetailsSection from "./ParentDetailsSection";
import ReportFindings from "./ReportFindings";
import { reportBasicInfo } from "../utils/constants";

const styles = {
    container: {
        display: "flex",
        flexDirection: "row" as "row",
        width: "90%",
    },
    segmentContainer: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        width: "fit-content",
        textWrap: "nowrap" as "nowrap",
    },
    segmentTitle: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: 600,
        paddingRight: "10%",
    },
    segmentContent: {},
    segmentImg: {
        width: "8rem",
        gridColumn: 3,
        alignSelf: "center",
    },
};

const ReportBasicInfoSection = () => {
    return (
        <div>
            <ReportSection
                title={reportBasicInfo.reportTitle}
                secondaryText="ID: 91"
            >
                <div style={styles.container}>
                    <div
                        style={{
                            ...styles.segmentContainer,
                            borderRight: "1px solid #064c60",
                            paddingRight: "31%",
                        }}
                    >
                        <span style={styles.segmentTitle} translate="yes">
                            {reportBasicInfo.service}:
                        </span>
                        <span style={styles.segmentContent}>SignalRAY</span>
                    </div>
                    <div style={styles.segmentContainer}>
                        <span style={styles.segmentTitle} translate="yes">
                            {reportBasicInfo.date}:
                        </span>
                        <span style={styles.segmentContent}>01-01-1994</span>
                    </div>
                </div>
            </ReportSection>
            <ReportSection
                title={reportBasicInfo.hospitalDetailsTitle}
                contentWrapperStyle={{
                    width: "100%",
                    justifyContent: "space-around",
                }}
            >
                <AddressInfoSection />
                <ContactInfoSection style={{ gridColumn: 2 }} />
                <img
                    alt="report-logo"
                    src={require("../static/report-logo.png")}
                    style={styles.segmentImg}
                />
            </ReportSection>
            <ReportSection title={reportBasicInfo.patientDetailsTitle}>
                <ParentDetailsSection patientId={9} />
            </ReportSection>
            <ReportSection
                title={reportBasicInfo.abnormalFindingsTitle}
                secondaryText={reportBasicInfo.confidenceTitle}
            >
                <ReportFindings isNormal={false} editable={true} />
            </ReportSection>
            <ReportSection
                title={reportBasicInfo.normalFindingsTitle}
                secondaryText={reportBasicInfo.confidenceTitle}
            >
                <ReportFindings isNormal={true} editable={true} />
            </ReportSection>
        </div>
    );
};

export default ReportBasicInfoSection;
