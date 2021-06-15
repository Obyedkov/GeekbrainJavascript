var questions = [
    {
        q: "Куда хотел мальчик в песне Мурата Насырова?\n",
        A1: "1. В школу\n",
        A2: "2. В поход\n",
        A3: "3. В Тамбов\n",
        A4: "4. В туалет\n",
        correct: 3,
    },
    {
        q: "Представителей какой субкультуры называют «детьми цветов»?\n",
        A1: "1. Хиппи\n",
        A2: "2. Панки\n",
        A3: "3. Готы\n",
        A4: "4. Эмо\n",
        correct: 1,
    },
    {
        q: "Какой парфюмерной продукцией в обиходе называют электронную почту?\n",
        A1: "1. Шампунь\n",
        A2: "2. Мыло\n",
        A3: "3. Духи\n",
        A4: "4. Зубная паста\n",
        correct: 2,
    }
]
var userAnswer = 0, goals = 0, wrongAnswer = 0;
money = 0;
for (var index = 0; index < questions.length; index++) {
    userAnswer = +prompt("Вопрос №" + (index + 1) + " " + questions[index].q + "Вариант ответов:\n" + questions[index].A1 + questions[index].A2 + questions[index].A3 + questions[index].A4 + "\nВведите номер правильного ответа\n\nДля выйти игры нажмите -1");
    if (userAnswer == -1) {
        alert('Возвращайте,  мы будем вам ждать')
        break;
    }
    if (userAnswer == questions[index].correct) {
        money += (index + 1) * 1000;
        alert("Поздравляю вы ответили правильно и получает за ответ ") + ((index + 1) * 1000) + "рублей";
        goals++;
    } else {
        wrongAnswer++;
        alert("К сожалению вы ответили неверно\n У вас осталось" + (3 - wrongAnswer) + " попытки");
        if (wrongAnswer == 3) {
            break;
        }
    }
    alert("Вы ответили правильно на " + goals + " вопросов из " + questions.length + " и заработали за игру " + money + " рублей");
}