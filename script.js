class Student {
    constructor(name, age, dateOfBirth, gender, studentID, hobbies) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.studentID = studentID;
        this.hobbies = hobbies;
        if (gender.toLowerCase() == 'male') {
            return this.gender = 'male'
        } else if (gender.toLowerCase() == 'female') {
            return this.gender = 'female'
        } else {
            return this.gender = 'invalid gender input'
        }
      
    }

    set setName(namabaru) {
        return this.name = namabaru;
    }

    set setAge(umurbaru) {
        return this.age = umurbaru;
    }

    set setDateOfBirth(tglBaru) {
        return this.dateOfBirth = tglBaru;
    }

    set setGender(genderBaru) {
        if (genderBaru.toLowerCase() == 'male') {
            return this.gender = 'male'
        } else if (genderBaru.toLowerCase() == 'female') {
            return this.gender = 'female';
        } else { this.gender='invalid gender input' }
    }

    addHobby(hobiBaru) {
        return this.hobbies.push(hobiBaru);
    }

    removeHobby(hobiYgHilang) {
        for (let i = 0; i < this.hobbies.length; i++) {
            if (this.hobbies[i] == hobiYgHilang) {
                this.hobbies.splice(i, 1);
            }
        }
    }

    get getData() {
        return `name: ${this.name},  
        Age: ${this.age} years old, 
        Date of Birth: ${this.dateOfBirth}, 
        Gender: ${this.gender},
        Student ID: ${this.studentID}, 
        Hobbies: ${this.hobbies}`;
    }
}


let Ivan = new Student('Ivan Adrianto', 24, '04 Januari 1996', 'male', '082020060', ['desain', 'koding', 'videografi'])

console.log (Ivan.getData)
Ivan.setName= 'Abdul Basith'
Ivan.setAge= 12
Ivan.setDateOfBirth= '12 Oktober 2020'
Ivan.setGender= 'cowo'
Ivan.addHobby('cuci piring')
Ivan.removeHobby('videografi')
console.log ('=========setelah perubahan===========')
console.log (Ivan.getData)