class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
async function loadJson(url) {
    let response = await fetch(url)

        if (response.status == 200) {
          return response.json();
        } 
        throw new HttpError(response);
}
  
// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let names;

    for(;;){
        names = prompt("Введите логин?", "iliakan");

        try {
            let user = await loadJson(`https://api.github.com/users/${names}`);
            console.log(`Полное имя: ${user.name}.`);
            return user;
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            }
        }
    }
}
  
demoGithubUser();