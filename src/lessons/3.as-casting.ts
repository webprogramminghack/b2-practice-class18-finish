// class 17 - lesson 11
// type Data = {
//   id: number;
//   name: string;
// };

// async function fetchData(): Promise<Data> {
//   const response = await fetch('https://api.example.com/data');
//   return await response.json();
// }

// fetchData().then((data) => {
//   console.log(data.name);
// });

type Todo = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isComplete: boolean;
};

// impementation without asynchronus
const result = fetch('https://api-example.com')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data as Todo;
  });

// impementation with asynchronus
async function fetchData() {
  const response = await fetch('https://api-example.com');
  const data = await response.json();
  return data as Todo;
}

fetchData().then((data) => {
  console.log(data.title);
});

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const jsonString =
  '{"id": 1, "name": "Laptop", "price": 1200, "inStock": true}';

const product = JSON.parse(jsonString) as Product;

console.log(product.name);
console.log(product.price);
