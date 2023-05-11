// promise in JavaScript 

let age = 21;

function validate(t,f)
{
    age >25 ? t("Welcome to the Club"):f("Enjoy the life kid")
}

// validate();
validate((t)=>{console.log(t)},(f)=>{console.log(f)});