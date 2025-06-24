const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");


//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

//Массив с результатами
const results = 
[
	new Result("Вам стоит обязательно посмотреть его", 0),
	new Result("Боюсь вы можете удариться о стену на платформе", 3),
	new Result("Можете смело ехать в Хогвартс", 6),
	new Result("А вы тот еще Поттерман", 9)
];

//Массив с вопросами
const questions = 
[
	new Question("Какой факультет в Хогвартсе выбрал Гарри Поттер?", 
	[
		new Answer("Слизерин", 0),
		new Answer("Гриффиндор", 1),
		new Answer("Хаффлпафф", 0),
		new Answer("Равенкло", 0)

	]),
    

	new Question("Какое заклинание использует Гарри для защиты от дементоров?", 
	[
		new Answer("Экспекто Патронум", 1),
		new Answer("Авада Кедавра", 0),
		new Answer("Левикорпус", 0),
		new Answer("Редукто", 0)
	]),

	new Question("Кто является главным антагонистом в первой части серии?", 
	[
		new Answer("Лорд Воландеморт", 1),
		new Answer("Долорес Амбридж", 0),
		new Answer("Северус Снейп", 0),
		new Answer("Беллатрикс Лестрейндж", 0)
	]),

	new Question("Какой предмет является ключевым для победы Гарри в турнире Трех Волшебников?", 
	[
		new Answer("Меч Гриффиндора", 0),
		new Answer("Мантия-невидимка", 0),
		new Answer("Бутылка с зельем", 0),
		new Answer("Кубок Огня", 1)
	]),

	new Question("Кто является лучшим другом Гарри Поттера?", 
	[
		new Answer("Невилл Долгопупс", 0),
		new Answer("Драко Малфой", 0),
		new Answer("Рон Уизли", 1),
		new Answer("Фред Уизли", 0)
	]),

	new Question("Как называется злая учительница, которая приходит в Хогвартс в пятой части?", 
	[
		new Answer("Минерва Макгонагл", 0),
		new Answer("Филиус Флитвик", 0),
		new Answer("Долорес Амбридж", 1),
		new Answer("Помона Спрут", 0)
	]),

    new Question("Что должен сделать Гарри, чтобы получить доступ к тайной комнате?", 
        [
            new Answer("Прочитать заклинание", 1),
            new Answer("Произнести слово «Слизерин»", 0),
            new Answer("Найти ключ", 0),
            new Answer("Ударить по стене", 0)
        ]),
    
    new Question("Какой волшебный предмет позволяет Гарри и его друзьям путешествовать во времени?", 
        [
            new Answer("Время-трансформатор", 0),
            new Answer("Маховик времени", 1),
            new Answer("Портключ", 0),
            new Answer("Мантия-невидимка", 0)
        ]),

    new Question("Кто убивает Сириуса Блэка?", 
        [
            new Answer("Лорд Воландеморт", 0),
            new Answer("Долорес Амбридж", 0),
            new Answer("Беллатрикс Лестрейндж", 1),
            new Answer("Гул'Дан", 0)
        ]),

    new Question("Какой зверь является патронусом Гарри Поттера?", 
        [
            new Answer("Олень", 1),
            new Answer("Собака", 0),
            new Answer("Лев", 0),
            new Answer("Орел", 0)
        ])

];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{

	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
        
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}