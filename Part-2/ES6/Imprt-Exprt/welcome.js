//exporting to other files
function sayWelcome(site)
{
    console.log(`Welcome to ${site}`);
}

function saySoon(site)
{
    console.log(`See you soon on ${site}`);
}

export {sayWelcome as say, saySoon as soon};        // exporting the functions(named export)

