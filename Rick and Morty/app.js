const allcharacter = document.getElementById("displayingCharacters");

const fetchCharacter = () => {
  const promises = [];
  for (let i = 1; i <= 671; i++) {
    const url = `https://rickandmortyapi.com/api/character/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then((results) => {
    const character = results.map((data) => ({
      name: data.name,
      status: data.status,
      species: data.species,
      image: data.image
    }));
    displayCharacters(character);
  });
};

const displayCharacters = (character) => {
  console.log(character);
  const characterHTMLString = character
    .map(
      (eachcharacter) => `
  <li class="card">
  <h2 class="card-title"><u>${eachcharacter.name}</u></h2>
  <img class="card-image" src="${eachcharacter.image}"/>
  <h4 class="card-title">Status: ${eachcharacter.status}</h4>
  <h4 class="card-title">Species: ${eachcharacter.species}</h4>
  `
    )
    .join("");
  allcharacter.innerHTML = characterHTMLString;
};

fetchCharacter();
