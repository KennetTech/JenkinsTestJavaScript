class FakePerson {

constructor(firstName, surName, birthday) {
    this.firstName = firstName;
    this.model = surName;
    this.birthday = birthday; 
}

}
const fakePerson = new FakePerson('Kennet', 'Christiansen', '250286');


console.log(fakePerson);
console.log(fakePerson.firstName);
