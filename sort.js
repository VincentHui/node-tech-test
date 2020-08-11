const testData = [
  {
    ID: "ad3jlDFsdafF",
    Priority: "2",
    Category: "A",
    Description: "Lorem ipsum dolor sit amet",
  },
  {
    ID: "ASDsafFAeadf",
    Priority: "1",
    Category: "C",
    Description: "Lorem ipsum dolor sit amet",
  },
  {
    ID: "ASDsafFAeadf",
    Priority: "4",
    Category: "B",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
];

//Ascending order
const sortPriority = (A, B) => A.Priority - B.Priority;

const sortCategory = (A, B) => {
  if (A.Category < B.Category) {
    return -1;
  }
  if (A.Category > B.Category) {
    return 1;
  }
  return 0;
};

const getSort = (sortType) => {
  switch (sortType) {
    case "priority":
      return sortPriority;
    case "category":
      return sortCategory;
    default:
      //made priority default
      return sortPriority;
  }
};

module.exports = getSort;
