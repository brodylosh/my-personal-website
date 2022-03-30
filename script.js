let shake = function shakeEightBall() {
    let result = Math.floor(Math.random() * 20);
    switch (result) {
        case 0:
            result = 'It is certain.';
            break;
        case 1:
            result = 'It is decidedly so.';
            break;
        case 2:
            result = 'Without a doubt.';
            break;
        case 3:
            result = 'Yes definitely';
            break;
        case 4:
            result = 'You may rely on it.';
            break;
        case 5:
            result = 'As I see it, yes.';
            break;
        case 6:
            result = 'Most likely.';
            break;
        case 7:
            result = 'Outlook good.';
            break;
        case 8:
            result = 'Yes.';
            break;
        case 9:
            result = 'Signs point to yes.';
            break;
        case 10:
            result = 'Reply hazy, try again.';
            break;
        case 11:
            result = 'Ask again later.';
            break;
        case 12:
            result = 'Better not tell you now.';
            break;
        case 13:
            result = 'Cannot predict now.';
            break;
        case 14:
            result = 'Concentrate and ask again.';
            break;
        case 15:
            result = 'Don\'t count on it.';
            break;
        case 16:
            result = 'My reply is no.';
            break;
        case 17:
            result = 'My sources say no.';
            break;
        case 18:
            result = 'Outlook not so good.';
            break;
        case 19:
            result = 'Very doubtful.';
            break;
    }
    document.getElementById('result').innerHTML = result;
};

const eightBall = document.querySelector(".eightball");
eightBall.addEventListener('click', shake);

