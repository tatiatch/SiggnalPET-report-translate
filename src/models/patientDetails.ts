export type gender = "M" | "F";
export type specie = "Canine" | "Feline";
export type neutered = "Neutered" | "Not Neutered";

export type patientId = number;

export interface PatientDetailsModel {
    ownerName: string;
    patientName: string;
    patientId: patientId;
    species: specie;
    breed: string;
    gender: gender;
    neutered: neutered;
}
