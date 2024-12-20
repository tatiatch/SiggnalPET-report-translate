import { Finding } from "../models/finding";
import { getRandomNumberInRange } from "./numbers";

export const convertToReadableString = (input: string): string => {
    // Split the input string by uppercase letters following lowercase letters
    const sections = input.split(/(?=[A-Z][a-z])/);

    // Capitalize the first letter of each section
    const formattedSections = sections.map((section) => {
        return section.charAt(0).toUpperCase() + section.slice(1);
    });

    // Join the sections with a space
    return formattedSections.join(" ");
};

export const medicalTerms = [
    "Abdominal Radiograph",
    "Additive",
    "Amorphous",
    "Anode",
    "Anterior-Posterior",
    "Apical-Lateral",
    "Arthrography",
    "Asymmetry",
    "Background Density",
    "Beam",
    "Bucky",
    "Calcification",
    "Cassette",
    "Caudal",
    "Centimeter",
    "Central Ray",
    "Cephalic",
    "Collimate",
    "Contrast",
    "Contrast Medium",
    "Contrast Studies",
    "Cranio-Caudal",
    "Craniomedial-Caudolateral Oblique",
    "Crepitation",
    "Density",
    "Dorsal",
    "Dorsopalmar",
    "Dorsoplantar",
    "Echo",
    "Electromagnetic Spectrum",
    "Exposure",
    "Femoral",
    "Filtration",
    "Fluoroscopy",
    "Fogging",
    "Fracture",
    "Gonad Shield",
    "Grid",
    "Halogens",
    "Image Receptor",
    "Infrared",
    "Intravenous Urography",
    "Ionization",
    "Isotropic",
    "Kilovolt (KV)",
    "Lateral",
    "Line-Focus Principle",
    "Magnetic Field",
    "Magnification",
    "Mammography",
    "Mas (Milliampere-Seconds)",
    "Midsagittal",
    "Milliampere (MA)",
    "Neutron",
    "Oblique",
    "Optical Density",
    "Orthogonal",
    "Penetrability",
    "Phosphorescence",
    "Photon",
    "Posteroanterior",
    "Power Rating",
    "Radiation",
    "Radiography",
    "Radiolucent",
    "Radiopaque",
    "Radiotherapy",
    "Radon",
    "Rare Earths",
    "Rem (Roentgen Equivalent Man)",
    "Roentgen",
    "Scatter",
    "Screen Film",
    "Sensitivity",
    "Silver Halides",
    "Source-to-Image Distance (SID)",
    "Static Electricity",
    "Sterilization",
    "Stiffness",
    "Superimposition",
    "Thermionic Emission",
    "Tongue",
    "Tube",
    "Ultrasonography",
    "Ultraviolet",
    "Ventral",
    "Wavelength",
    "X-Ray",
];

// Array of sentences describing findings from x-ray analysis
export const xrayFindingsSentences = [
    "The x-ray analysis revealed a %s in the %s region.",
    "An abnormal %s was observed during the x-ray analysis.",
    "The x-ray showed signs of %s near the %s.",
    "A %s was detected in the x-ray near the %s.",
    "The x-ray indicated the presence of a %s around the %s.",
    "Signs of %s were evident in the x-ray analysis.",
    "An area of concern highlighted in the x-ray was a %s near the %s.",
    "The x-ray revealed an unexpected %s near the %s.",
    "A %s was identified in the x-ray analysis near the %s.",
    "The x-ray displayed clear evidence of %s around the %s.",
    "An irregular %s was noted in the x-ray near the %s.",
    "The x-ray showed a %s in the %s area.",
    "The x-ray revealed %s in the %s region.",
    "A %s near the %s was evident from the x-ray analysis.",
    "The x-ray detected a %s close to the %s.",
    "A %s was found during the x-ray analysis near the %s.",
    "The x-ray indicated an abnormality involving %s near the %s.",
    "An unusual %s was observed on the x-ray near the %s.",
    "The x-ray showed signs of %s near the %s.",
    "A %s was detected in the x-ray analysis near the %s.",
    "The x-ray analysis highlighted the presence of %s near the %s.",
    "Signs of %s were evident in the x-ray analysis.",
    "An area of concern highlighted in the x-ray was a %s near the %s.",
    "The x-ray revealed an unexpected %s near the %s.",
    "A %s was identified in the x-ray analysis near the %s.",
    "The x-ray displayed clear evidence of %s around the %s.",
    "An irregular %s was noted in the x-ray near the %s.",
    "The x-ray showed a %s in the %s area.",
    "The x-ray revealed %s in the %s region.",
    "A %s near the %s was evident from the x-ray analysis.",
    "The x-ray detected a %s close to the %s.",
    "A %s was found during the x-ray analysis near the %s.",
];

// Generate random sentences by replacing placeholders with random medical terms
export const randomXrayFindingsText = (): {
    medicalTerm: string;
    medicalSentence: string;
} => {
    const randomMedicalTerm1 =
        medicalTerms[Math.floor(Math.random() * medicalTerms.length)];
    const randomMedicalTerm2 =
        medicalTerms[Math.floor(Math.random() * medicalTerms.length)];
    const randomMedicalSentence =
        xrayFindingsSentences[
            Math.floor(Math.random() * xrayFindingsSentences.length)
        ];

    return {
        medicalTerm: `${randomMedicalTerm1} - ${randomMedicalTerm2}`,
        medicalSentence: randomMedicalSentence
            .replace("%s", randomMedicalTerm1)
            .replace("%s", randomMedicalTerm2),
    };
};

export const randomXrayFinding = (isNormal: boolean): Finding => {
    const { medicalTerm, medicalSentence } = randomXrayFindingsText();
    return isNormal
        ? {
              id: getRandomNumberInRange(999800, 999899),
              isNormal: true,
              isAbnormal: false,
              isLikely: true,
              masks: [],
              imageIds: ["99ddc2542d1e57caa5044eb9"],
              codeId: 812,
              abbreviation: "tpl",
              description: medicalSentence,
              summary: medicalSentence,
              name: medicalTerm,
              group: "dental",
              subgroup: "dental",
          }
        : {
              id: getRandomNumberInRange(999900, 999999),
              isNormal: false,
              isAbnormal: true,
              isLikely: false,
              masks: [],
              imageIds: ["888db031f01067fc540e8883"],
              codeId: 17,
              abbreviation: "apf",
              description: medicalSentence,
              summary: medicalSentence,
              name: medicalTerm,
              group: "musculoskeletal",
              subgroup: "bone",
          };
};

export const summarySentenceStructures = [
    "The x-ray analysis revealed %s in the %s region, indicating possible %s.",
    "An abnormal %s was detected during the x-ray analysis, suggesting %s in the %s area.",
    "Signs of %s were observed in the x-ray, pointing towards %s near the %s.",
    "The x-ray indicated the presence of a %s, along with %s in the %s region.",
    "A %s near the %s was evident from the x-ray analysis, along with %s.",
    "An area of concern highlighted in the x-ray was a %s near the %s, suggesting %s.",
];

export function generateXrayAnalysisSummary(): string {
    // Array of sentence structures for the summary

    // Randomly select sentence structure and medical terms
    const randomSentenceStructure =
        summarySentenceStructures[
            Math.floor(Math.random() * summarySentenceStructures.length)
        ];
    const randomMedicalTerms = Array.from(
        { length: 3 },
        () => medicalTerms[Math.floor(Math.random() * medicalTerms.length)]
    );

    // Replace placeholders in the sentence structure with random medical terms
    const summary = randomSentenceStructure.replace(
        /%s/g,
        () => randomMedicalTerms.pop() || ""
    );

    // Generate a random number of sentences (between 1 and 4)
    const numberOfSentences = Math.floor(Math.random() * 4) + 1;
    const sentences = new Array(numberOfSentences).fill(summary);

    // Join sentences to form a paragraph
    return sentences.join(" ");
}
