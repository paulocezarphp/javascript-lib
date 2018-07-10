var person = {
    name: 'Cezar',
    age: 34,
    Resposta(abc){
        return abc;
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.Resposta('Seja bem vindo'));

person.name = 'Lucas';
person.age = 32;
console.log(person.name);
console.log(person.age);