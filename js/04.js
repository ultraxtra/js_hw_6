// # Задача 4

// Уявімо, що ми маємо об'єкт з даними користувача:


const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  city: 'New York',
  country: 'USA',
};

const getUserInfo= function(userObj,prefix) {
    const {firstName,age,city}=userObj;
      return (prefix!==null||prefix!==undefined)?`${prefix} ${firstName} ${age} ${city}`:
      `${firstName} ${age} ${city}`;
    };
   
    console.log(getUserInfo(user,0)); 


// Напишіть функцію getUserInfo, яка буде приймати об'єкт user та використовуючи
// деструктуризацію, буде повертати рядок, що містить ім'я, вік та місто
// користувача.

// Також, функція повинна приймати додатковий об'єкт з параметрами, який може
// містити параметр prefix, який буде доданий перед рядком з інформацією про
// користувача. Якщо параметр prefix не переданий, то функція повинна повертати
// рядок з інформацією про користувача без префіксу.