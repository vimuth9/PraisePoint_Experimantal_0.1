const details = {
    person1: {
      Name: 'John',
      SecondName: 'Doe',
      Age: 30,
      favoriteColor: 'Blue'
    },
    person2: {
      Name: 'Michael',
      SecondName: 'Smith',
      Age: 25,
      favoriteColor: 'Green'
    },
    person3: {
      Name: 'Robert',
      SecondName: 'Johnson',
      Age: 28,
      favoriteColor: 'Red'
    },
    person4: {
      Name: 'William',
      SecondName: 'Brown',
      Age: 22,
      favoriteColor: 'Yellow'
    }
  };
  
  const person1Values = Object.values(details.person1);
  const person3Values = Object.values(details.person3);
  
  const newObject = {};
  person1Values.forEach((value, index) => {
    newObject[value] = person3Values[index];
  });
  
  console.log(newObject);
  