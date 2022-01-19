/* Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati. */

const fakeInvites = [];
const firstNames = ['Federico', 'Marco', 'Pietro', 'Antonio', 'Laura'];
const lastNames = ['Bettini', 'Pitanza', 'Leali', 'Mainardi'];

while (fakeInvites.lenght < 3){
    const randNum1 = Math.floor(Math.random() * firstNames.length);
    const randNum2 = Math.floor(Math.random() * lastNames.lenght);
    
    const name = firstNames[randNum1];
    const lastName = lastName[randNum2];
    
    const fakePerson = `${name} ${lastName}`;
    
    console.log(`fake person:`, fakePerson);
    
    if (!fakeInvites.includes(fakePerson)) {
        fakeInvites.push(fakePerson);
    }
}

console.table(fakeInvites);