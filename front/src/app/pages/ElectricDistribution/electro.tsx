const electro = {
  name: "Main Controller",
  numbersOfSubControllers: 3,
  generalPower: 26,
  mode: "off_unnecessary",
  controllers:
    [
      {
        name: "Lab PC controller",
        power: 8,
        status: 1,
        numberOfElements: 3
      },
      {
        name: "Ventil controller",
        power: 11,
        status: 1,
        numberOfElements: 3
      },
      {
        name: "Light controller",
        power: 8,
        status: 1,
        numberOfElements: 1
      }
      ]
}

export default electro;
