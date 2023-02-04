const studentArr = [{
        name: 'Сергей',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 1000,
        course: 2,
    },
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
        course: 1,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
        course: 3,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
        course: 2,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,
        course: 4,
    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
        course: 3,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
        course: 1,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
        course: 4,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
        course: 3
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
        course: 1,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
        course: 2,
    },
];

// Задача - создать класс Student который принимает аргументом в конструкторе объект enrollee (абитурент). У экземпляра класса Student должны быть поля:
// id - уникальный идентификатор студента (генерируется при создании экземпляра и начинается с 1);
// name - имя студента (передаем в объекте enrollee);
// surname - фамилия студента (передаем в объекте enrollee);
// ratingPoint - рейтинг студента по результатам вступительных экзаменов (передаем в объекте enrollee);
// schoolPoint - рейтинг студента по результатам ЗНО (передаем в объекте enrollee);
// isSelfPayment - если true, то студент на контракте, если false - на бюджете (генерируется по логике указанной ниже).
// Id генерируется автоматически при создании экземпляра Student. isSelfPayment определяется по параметру "ratingPoint". Если ratingPoint больше или равен 800, то студент может быть на бюджет, но бюджет он может получить только если его "ratingPoint" не меньше чем у других студентов в массиве. Студентов которые на бюджете не должно быть больше чем 5 в массиве. То есть если "ratingPoint" больше чем хоть у одного из 5 бюджетников то мы присваиваем isSelfPayment = false. И в этот момент студент из массива который имел isSelfPayment = false, но его ratingPoint меньше чем у остальных 5 бюджетников, с нашим включительно, то ему делаем isSelfPayment = true, то есть переводим этого неудачника на контракт. Что делать если у 6-рых студентов баллы 1000? Ну имеется ввиду, если 2 человека с одинаковыми баллами ratingPoint борются за 5 бюджетное место? В таком случае смотрим на schoolRating, у кого он больше тот и на бюджете.

class Student {
  constructor(enrolee) {
    this.id = Student.ID++;
    this.isSelfPayment = null;
    Object.assign(this, enrolee);

    Student.listOfStudents.push(this);
    Student.filterBySelfPayment();
  }

  static ID = 1;
  static listOfStudents = [];

  static filterBySelfPayment() {
    const studentsList = Student.listOfStudents;
    studentsList.sort((a, b) => {
      if (b.ratingPoint > a.ratingPoint) return 1;
      if (b.ratingPoint < a.ratingPoint) return -1;
      if (b.ratingPoint === a.ratingPoint) {
        b.schoolPoint > a.schoolPoint ? 1 : 0;
      }
    });
    for (let i = 0; i < studentsList.length; i++){
      i <= 4 ? studentsList[i].isSelfPayment = false : studentsList[i].isSelfPayment = true;
    }
  }
}

for (const enrolee of studentArr) {
  new Student(enrolee);
}

console.log(Student.listOfStudents);

// Реализуйте класс CustomString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class CustomString {
  reverse(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--){
      result += str[i];
    }
    return result;
  }

 ucFirst(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += i === 0 ? str[i].toUpperCase() : str[i].toLowerCase();

  }
return result
 }

  ucWords(string) {
    let result = '';
    let upperCase = true;
    for (let i = 0; i < string.length; i++) {
      const next = string[i + 1];
      const curr = string[i];

      result += upperCase ? curr.toUpperCase() : curr;
      upperCase = curr === ' ' && next !== ' ' ? true : false;
    }
    return result;
  }

 
}





const cString = new CustomString();

console.log(cString.reverse('qwerty'));
console.log(cString.ucFirst('qwerty'));
console.log(cString.ucWords('qwerty qwerty qwerty'));




