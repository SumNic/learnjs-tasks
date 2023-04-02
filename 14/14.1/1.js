let user = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(target, {
        /* ваш код */
        // throw new Error("Отказано в доступе");
        get(target, prop) {
            if (prop in target) {
              return target[prop];
            } else {
                throw new Error("Ошибка: такого свойства не существует");
            }
          }
    });
  }
  
  user = wrap(user);
  
  console.log(user.name); // John
  console.log(user.age); // Ошибка: такого свойства не существует