const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "PL";

client.on('message', message => {
    client.user.setActivity("PLC");
    if (!message.content.toUpperCase().startsWith(prefix) || !message.guild) return;
    if (message.author.bot) return;
    if (message.content.toUpperCase() == 'PLEXCEL') {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        if (message.channel.parentID != "816852849970774067") {
            message.channel.send(`<@${message.author.id}> el excel lo pordras encontrar en : \n https://docs.google.com/spreadsheets/d/1bMOO0Lvpqy2CKENR24SWgz99070xgljuMI6MISAhh4M/edit?usp=sharing`).catch(err => console.log(err));
        }
    }
    if (message.content.toUpperCase() == 'PLDAÑOS') {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        if (message.channel.parentID != "816852849970774067") {
            message.channel.send(`<@${message.author.id}> el excel de daño lo pordras encontrar en : \n https://docs.google.com/spreadsheets/d/1c4ftclpxJ0ADM2kUIeCVRWm4xduYenvAgGQITeaBErk/edit?usp=sharing`).catch(err => console.log(err));
        }
    }
    if (message.content.toUpperCase() == "PLRANK") {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        message.channel.send("<@" + message.author.id + "> aqui podras ver el rank recommendado para las waifus: \n" +
            "NOTAS para CB: \n" +
            "-Kei es ZZZ\n" +
            "-Tamaki summer 9-5 sin la pieza izquierda inferior\n" +
            "-Jun 9-6 si la tienes en 3*\n" +
            "-Kokkoro y Kokkoro summer 10-1 con la lanza superior derecha.\n", { files: ["recursos/Rank10-5.png"] }).catch(err => console.log(err));
    }
    if (message.content.toUpperCase() == "PLRANKJP") {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        message.channel.send("<@" + message.author.id + "> aqui podras ver el rank recommendado para las waifus en niveles bajos: \n" +
            "NOTAS para CB: \n" +
            "-Kei es ZZZ \n", { files: ["recursos/RankJP.png"] }).catch(err => console.log(err));
        message.channel.send("<@" + message.author.id + "> aqui podras ver el rank recommendado para las waifus en niveles altos: \n" +
            "NOTAS para CB: \n" +
            "-Kei es ZZZ \n", { files: ["recursos/RankJP2.png"] }).catch(err => console.log(err));
            message.channel.send("<@" + message.author.id + "> aqui podras ver algo que dejo peloncho xd: \n" +
            "NOTAS para CB: \n" +
            "-Kei es ZZZ \n", { files: ["recursos/tp.png"] }).catch(err => console.log(err));
    }
    if (message.content.toUpperCase() == 'PLPVP') {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        message.channel.send(`<@${message.author.id}> en esta pagina podras buscar composiciones para atacar en el PVP : \n https://www.pcrdfans.com/en/battle`).catch(err => console.log(err));
    }
    if (message.content.toUpperCase() == 'PLDUNEX') {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        message.channel.send(`<@${message.author.id}> en este documento podras buscar composiciones para el dungeon extreme : \n https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRonvbtyr3N4m-sz4W01ZiepUeM7ifBTRiWMucbPCV1-3jnSuNbS6nTVihsa6QuYmEv1O1W6oaOp8hN/pubhtml?gid=872093328`).catch(err => console.log(err));
    }
    if (message.content.toUpperCase() == 'PLEVENT') {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        message.channel.send(`<@${message.author.id}> en este documento podras encontrar informacion y compocisiones para el evento actual : \n https://docs.google.com/document/d/1P9EBGdHbreg2GRPsvRRF0NW6hkdyrOXCMoZT2HT5rR0/edit?usp=sharing`).catch(err => console.log(err));
    }
    if (message.content.toUpperCase() == "PLB1") {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        if (message.channel.parentID != "816852849970774067") {
            message.channel.send(`<@${message.author.id}> aquí podrás ver la composición recomendada: \n`, { files: ["recursos/cb/B1.png"] }).catch(err => console.log(err));
        }
    }
    if (message.content.toUpperCase() == "PLB2") {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        if (message.channel.parentID != "816852849970774067") {
            message.channel.send(`<@${message.author.id}> aquí podrás ver la composición recomendada: \n`, { files: ["recursos/cb/B2.png"] }).catch(err => console.log(err));
        }
    }
    if (message.content.toUpperCase() == "PLB3") {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        if (message.channel.parentID != "816852849970774067") {
            message.channel.send(`<@${message.author.id}> aquí podrás ver la composición recomendada: \n`, { files: ["recursos/cb/B3.png"] }).catch(err => console.log(err));
        }
    }
    if (message.content.toUpperCase() == "PLB4") {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        if (message.channel.parentID != "816852849970774067") {
            message.channel.send(`<@${message.author.id}> aquí podrás ver la composición recomendada: \n`, { files: ["recursos/cb/B4.png"] }).catch(err => console.log(err));
            //message.channel.send(`<@${message.author.id}> también esta la opción mágica: \n`, { files: ["resources/cb/B4M.png"] });
        }
    }
    if (message.content.toUpperCase() == "PLB5") {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        if (message.channel.parentID != "816852849970774067") {
            message.channel.send(`<@${message.author.id}> aquí podrás ver la composición recomendada: \n`, { files: ["recursos/cb/B5.png"] }).catch(err => console.log(err));
        }
    }
    if (message.content.toUpperCase() == "PLB5R") {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        if (message.channel.parentID != "816852849970774067") {
            message.channel.send(`<@${message.author.id}> aquí podrás ver la composición recomendada: \n`, { files: ["recursos/cb/B5R.png"] }).catch(err => console.log(err));
        }
    }
    if (message.content.toUpperCase() == "PLLILY") {
        console.log(message.content.toUpperCase() + " " + message.channel.name);
        message.channel.send(`<@${message.author.id}> en estos link podras encontrar la informacion del juego: \n https://gamerch.com/assaultlily/entry/217080 \n https://altema.jp/assaultlily/saikyomemoria`).catch(err => console.log(err));
    }
});

client.login(ENV['token']);
