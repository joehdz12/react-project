export const categories = [
    { id: "MLA1744", name: "Relojes" },
    { id: "MLA1000", name: "Gafas" },
    { id: "MLA1574", name: "Gorras" }
];

export const getCategories = () => {
    return Promise.resolve(categories);
};