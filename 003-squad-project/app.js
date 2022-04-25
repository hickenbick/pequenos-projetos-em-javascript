let data = [
  {
    name: 'Amanda',
    age: "14",
  },
  {
    name: 'Milene',
    age: "18",
  },
  {
    name: 'Matheus',
    age: "23",
  },
  {
    name: 'Maria',
    age: "15",
  },
  {
    name: 'Rodrigo',
    age: "29",
  },
  {
    name: 'Pedro',
    age: "31",
  },
];

const info = document.querySelector("#info");

let details = data.map(function(item) {
  return `<div> ${item.name} is ${item.age} years old</div>`;
});

info.innerHTML = details.join('\n');
