export type confidence = 1 | 2 | 3 | 4;

export interface FindingEntry {
    checked: boolean;
    name: string;
    confidence: confidence;
}

interface FindingMetadata {
    codeId: number;
    abbreviation: string;
    name: string;
    description: string;
    summary: string;
    group: string;
    subgroup: string;
}

interface Mask {
    svg: string;
    imageId: string;
}

export interface Finding extends FindingMetadata {
    isNormal: boolean;
    isAbnormal: boolean;
    isLikely: boolean;
    id: number;
    masks: Mask[];
    imageIds: string[];
    vhs?: number;
    bodyScore?: number;
    color?: string;
}

export type Findings = Finding[];
