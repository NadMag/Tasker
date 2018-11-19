export const getEmployees = () => {
  return employees;
};

const employees = [
  {
    name: "Nadav",
    tasks: [
      {
        title: "Code",
        description: "Build a TFS like",
        priority: "Critical",
        state: "New",
        estimate: 5
      }
    ]
  },
  {
    name: "Zamir",
    tasks: [
      {
        title: "Be a zamir",
        Description: "Build a TFS like",
        Priority: "Important",
        State: "a",
        Estimate: "a"
      }
    ]
  }
];
