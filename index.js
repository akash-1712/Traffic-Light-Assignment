function calculateTotalSpentByCategory(transactions) {
  const result = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    if (!result[category]) {
      result[category] = 0;
    }

    result[category] += price;
  });

  return Object.keys(result).map((category) => ({
    category: category,
    totalSpent: result[category],
  }));
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: "Clothes",
    itemName: "T-shirt",
  },
  {
    id: 4,
    timestamp: 1656076800000,
    price: 30,
    category: "Food",
    itemName: "Sushi",
  },
  {
    id: 5,
    timestamp: 1656076800000,
    price: 25,
    category: "Clothes",
    itemName: "Jeans",
  },
];
const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
console.log(totalSpentByCategory);
