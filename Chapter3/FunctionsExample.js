function printFarmInventory(animalsArray) {
  animalsArray.forEach((animal) => {
    amoutWithLabelString = formatAmount(animal);
    console.log(amoutWithLabelString);
  });
}

function formatAmount(animalParam) {
  const { amount, animal } = animalParam;
  let amountString = String(amount);
  while (amountString.length < 3) {
    amountString = `0${amountString}`;
  }
  return `${amountString} ${animal}`;
}
let animals = [
  { animal: "cows", amount: "2" },
  { animal: "chickens", amount: "3" },
];
printFarmInventory(animals);
