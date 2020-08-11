const testData = [
  {
    ID: "ad3jlDFsdafF",
    Priority: "2",
    Category: "A",
    Description: "Lorem ipsum dolor sit amet",
  },
  {
    ID: "ASDsafFAeadf",
    Priority: "4",
    Category: "B",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    ID: "ASDsafFAeadf",
    Priority: "4",
    Category: "C",
    Description: "Lorem ipsum dolor sit amet",
  },
];

const sortPriority = (A, B) => {
  A.Priority - B.Priority;
};

const sortCategory = (A, B) => {
  if (A.Category < B.Category) {
    return -1;
  }
  if (A.Category > B.Category) {
    return 1;
  }
  return 0;
};

console.log(testData.sort(sortCategory));
