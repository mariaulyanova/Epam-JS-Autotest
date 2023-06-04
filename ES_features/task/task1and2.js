// 1. Use the spread operator(...) to combine multiple arrays into a single array

const countries = ['United Kingdom', 'Canada', 'Germany', 'Australia'];
const countriesCapitals = ['London', 'Ottawa', 'Berlin', 'Canberra'];

const combineArr = ['This countries:', ...countries, 'have these capitals:', ...countriesCapitals];

console.log(combineArr);

// 2. Create a function that uses destructuring assignment to extract
//    values from an object and assign them to variables.

function extractValues(obj) {
  const { countries, capitals, population } = obj;

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const capital = capitals[i];
    const pop = population[i];

    console.log(`Country: ${country}, Capital: ${capital}, Population: ${pop}`);
  }

}

const countriesInf = {
  countries: ['United Kingdom', 'Canada', 'Germany', 'Australia'],
  capitals: ['London', 'Ottawa', 'Berlin', 'Canberra'],
  population: [67.33, 38.25, 83.2, 25.69],
};

extractValues(countriesInf);
