const people = ["Eva", "Mark", "Krysia", "John", "Edmund"];

export async function getPeople() {
    return people;
}

export function addPerson(name) {
    people.push(name);
}

