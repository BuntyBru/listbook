function Reducer(obj, action) {
  switch (action) {
    case "ongoing":
      console.log("hey", action);
      return [
        "ongoing investment1",
        "ongoing investment2",
        "ongoing investment3 ",
      ];

    case "active":
      console.log("hey", action);
      return [
        "active investment1",
        "active investment2",
        "active investment3 ",
      ];

    case "sold":
      console.log("hey", action);
      return ["sold investment1", "sold investment2", "sold investment3"];

    default:
      console.log("hey", action);
      return null;
  }
}

export default Reducer;
