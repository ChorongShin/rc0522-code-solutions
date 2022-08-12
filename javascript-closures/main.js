function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };

}
const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const Dan = medicalSchool('Dan Abramov');
const Ryan = lawSchool('Ryan Florence');

console.log(Dan);
console.log(Ryan);

/* ES 6 Version */
const grad = credential => fullName => `${fullName}, ${credential}`;

const med = grad('M.D.');
const law = grad('Esq.');

const lisa = med('Lisa Simpsom');
const sheldon = law('Shendon Cooper');

console.log(lisa);
console.log(sheldon);
