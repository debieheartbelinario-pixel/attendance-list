// src/students.js
const studentNames = [
    "Acabal, Justine Lee R.",
    "Adaza, Dea Jane P.",
    "Anteniero, April Mie L.",
    "Bacalso, James Lee S.",
    "Barroquillo, Keith Amiel",
    "Belinario, Debie Heart G.",
    "Betonio, Queen Stephanie C.",
    "Cajote, Jerry P.",
    "Capada, Kenneth D.",
    "Cordero, Jeffrey S.",
    "Cortez, Mandie Jane D.",
    "Delantar, Rhoen Dale A.",
    "Ebarsabal, Francis Robert G.",
    "Eroy, Mc Harley R.",
    "Espegadera, Melvin M.",
    "Gapo, Jessa Leah M.",
    "Gerona, Khell Joy G.",
    "Gomez, Jea C.",
    "Jalalon, Rossel S.",
    "Jayo, Aren R.",
    "Labrague, Paul Simon O.",
    "Lapar, Marvin Jake P.",
    "Lumbab, Ian Matthew A.",
    "Mier, John Michael P.",
    "Morales, Jestly M.",
    "Montebon, Chris Jane N.",
    "Nacua, Aisan Luis M.",
    "Padigos, Philipe Ryan C.",
    "Salawague, Romeo Albert L.",
    "Sejoyla, Jhanrielyan R.",
    "Sisican, Nathaniel A.",
    "Sordilla, Mike L.",
    "Tompong, Wynjess Angel",
    "Ursaiz, Eleza Mae T.",
    "Zambo, Shaine A"
];

const initialStudents = studentNames.map((name, index) => ({
    id: index + 1, // Unique ID for key
    rollNo: index + 1,
    name: name,
    status: 'P', // Default to Present (P), other options: Absent (A), Leave (L)
}));

export default initialStudents;
