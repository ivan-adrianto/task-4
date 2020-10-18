let jeniskelamin = ['male', 'female']
class Student {
    constructor(name, age, dateOfBirth, gender, studentID, hobbies) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.studentID = studentID;
        this.hobbies = hobbies;
        if (gender == 'male') {
            return this.gender = 'male'
        } else if (gender == 'female') {
            return this.gender = 'female'
        } else {
            return this.gender = 'invalid gender'
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
        if (genderBaru == 'male') {
            return this.gender = genderBaru
        } else if (genderBaru == 'female') {
            return this.gender = genderBaru;
        } else { this.gender='invalid gender' }
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
let Ryan = new Student('Ryan Maulana', 77, '04 September 2001', 'male', '1514118120', ['mancing mania', 'presenter handal', 'komedi tunggal'])


console.log (Ivan.getData)
Ivan.setName= 'Jessica Azalia'
Ivan.setAge= 12
Ivan.setDateOfBirth= '12 Oktober 2020'
Ivan.setGender= 'cowo'
Ivan.addHobby('cuci piring')
Ivan.removeHobby('videografi')
console.log ('=========setelah perubahan===========')
console.log (Ivan.getData)

// Ivan.addHobby('tiktokan')
// Ivan.addHobby('makan besar')
// Ivan.removeHobby('desain')
// Ivan.setName='Abdul Basith'
// // Ivan.setGender='uhuy'
// Ivan.setAge=35
// Ivan.setDateOfBirth='02 Februari 1999'

// console.log (Ivan.getData)
// console.log(Ivan.hobbies)
// console.log(Ivan.gender)
// console.log(Ivan.gender)
// console.log(Ryan.getData)
// Ryan.setGender = 'cewe'
// Ryan.setName = 'Masashi Kishimoto'
// Ryan.setAge = 12
// Ryan.setDateOfBirth = 'October 19th 2020'
// Ryan.addHobby('memanah')
// Ryan.removeHobby('presenter handal')
// console.log('==============setelah setGender=============')
// console.log(Ryan.getData)