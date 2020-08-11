const testAray = [
  {
    ID: "ad3jlDFsdafF",
    Priority: "4",
    Category: "A",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    ID: "ad3jalDFsdafFsa",
    Priority: "3",
    Category: "C",
    Description: "Lorem ipsum dolor sit amet",
  },
];

const parseJson = (jsonArray) =>
  jsonArray.reduce((acc, obj) => {
    const objReadable = `ID: ${obj.ID} \nPriority: ${obj.Priority} \nCategory: ${obj.Category} \nDescription: ${obj.Description} \n`;
    return acc + objReadable + "\n";
  }, "");

module.exports = parseJson;
