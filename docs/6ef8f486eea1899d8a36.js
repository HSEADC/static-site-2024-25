function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var headElem = document.getElementById("head");
var buttonsElem = document.getElementById("buttons");
var pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
var Quiz = /*#__PURE__*/function () {
  function Quiz(type, questions, results) {
    _classCallCheck(this, Quiz);
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
  return _createClass(Quiz, [{
    key: "Click",
    value: function Click(index) {
      //Добавляем очки
      var value = this.questions[this.current].Click(index);
      this.score += value;
      var correct = -1;

      //Если было добавлено хотя одно очко, то считаем, что ответ верный
      if (value >= 1) {
        correct = index;
      } else {
        //Иначе ищем, какой ответ может быть правильным
        for (var i = 0; i < this.questions[this.current].answers.length; i++) {
          if (this.questions[this.current].answers[i].value >= 1) {
            correct = i;
            break;
          }
        }
      }
      this.Next();
      return correct;
    }

    //Переход к следующему вопросу
  }, {
    key: "Next",
    value: function Next() {
      this.current++;
      if (this.current >= this.questions.length) {
        this.End();
      }
    }

    //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
  }, {
    key: "End",
    value: function End() {
      for (var i = 0; i < this.results.length; i++) {
        if (this.results[i].Check(this.score)) {
          this.result = i;
        }
      }
    }
  }]);
}(); //Класс, представляющий вопрос
var Question = /*#__PURE__*/function () {
  function Question(text, answers) {
    _classCallCheck(this, Question);
    this.text = text;
    this.answers = answers;
  }
  return _createClass(Question, [{
    key: "Click",
    value: function Click(index) {
      return this.answers[index].value;
    }
  }]);
}(); //Класс, представляющий ответ
var Answer = /*#__PURE__*/_createClass(function Answer(text, value) {
  _classCallCheck(this, Answer);
  this.text = text;
  this.value = value;
}); //Класс, представляющий результат
var Result = /*#__PURE__*/function () {
  function Result(text, value) {
    _classCallCheck(this, Result);
    this.text = text;
    this.value = value;
  }

  //Этот метод проверяет, достаточно ли очков набрал пользователь
  return _createClass(Result, [{
    key: "Check",
    value: function Check(value) {
      if (this.value <= value) {
        return true;
      } else {
        return false;
      }
    }
  }]);
}(); //Массив с результатами
var results = [new Result("Вам стоит обязательно посмотреть его", 0), new Result("Может когда-нибудь и вам помогут чернушки", 3), new Result("Вы можете покататься на котобусе", 6), new Result("Да вы настоящий Тоторо", 9)];

//Массив с вопросами
var questions = [new Question("Как зовут двух сестер, главных героинь фильма?", [new Answer("Саюри и Миюки", 0), new Answer("Мэй и Сацуки", 1), new Answer("Акико и Харуко", 0), new Answer("Нана и Юко", 0)]), new Question("Каким существом является Тоторо?", [new Answer("Дух леса", 1), new Answer("Призрак", 0), new Answer("Фея", 0), new Answer("Дракон", 0)]), new Question("Где происходит действие фильма?", [new Answer("В большом городе", 0), new Answer("В деревне", 1), new Answer("На острове", 0), new Answer("В горах", 0)]), new Question("Какой предмет Мэй находит в лесу, который приводит к встрече с Тоторо?", [new Answer("Гриб", 0), new Answer("Семена", 1), new Answer("Цветок", 0), new Answer("Лист", 0)]), new Question("Какой транспорт использует Тоторо, чтобы перемещаться по воздуху?", [new Answer("Зонтик", 1), new Answer("Листья", 0), new Answer("Облака", 0), new Answer("Крылья", 0)]), new Question("Какую болезнь имеет мать Сацуки и Мэй?", [new Answer("Грипп", 0), new Answer("Туберкулез", 1), new Answer("Простуда", 0), new Answer("Рак", 0)]), new Question("Что Тоторо помогает сделать Сацуки и Мэй в одном из самых запоминающихся моментов?", [new Answer("Собрать урожай", 0), new Answer("Найти мать", 0), new Answer("Посадить семена", 1), new Answer("Погладить кота", 0)]), new Question("Как называется деревенский дух, который также появляется в фильме и является другом Тоторо?", [new Answer("Сусуму", 0), new Answer("Кусакэ", 0), new Answer("Чиби-Тоторо", 0), new Answer("Неко-Такси", 1)]), new Question("Каковы основные темы фильма «Мой сосед Тоторо»?", [new Answer("Дружба и приключения", 0), new Answer("Семья и природа", 1), new Answer("Любовь и потеря", 0), new Answer("Научные открытия", 0)]), new Question("Кто является режиссером фильма «Мой сосед Тоторо»??", [new Answer("Хаяо Миядзаки", 1), new Answer("Иссэй Кавасэ", 0), new Answer("Такэси Китано", 0), new Answer("Сатоши Кон", 0)])];

//Сам тест
var quiz = new Quiz(1, questions, results);
Update();

//Обновление теста
function Update() {
  //Проверяем, есть ли ещё вопросы
  if (quiz.current < quiz.questions.length) {
    //Если есть, меняем вопрос в заголовке
    headElem.innerHTML = quiz.questions[quiz.current].text;

    //Удаляем старые варианты ответов
    buttonsElem.innerHTML = "";

    //Создаём кнопки для новых вариантов ответов
    for (var i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
      var btn = document.createElement("button");
      btn.className = "button";
      btn.innerHTML = quiz.questions[quiz.current].answers[i].text;
      btn.setAttribute("index", i);
      buttonsElem.appendChild(btn);
    }

    //Выводим номер текущего вопроса
    pagesElem.innerHTML = quiz.current + 1 + " / " + quiz.questions.length;

    //Вызываем функцию, которая прикрепит события к новым кнопкам
    Init();
  } else {
    //Если это конец, то выводим результат
    buttonsElem.innerHTML = "";
    headElem.innerHTML = quiz.results[quiz.result].text;
    pagesElem.innerHTML = "Очки: " + quiz.score;
  }
}
function Init() {
  //Находим все кнопки
  var btns = document.getElementsByClassName("button");
  for (var i = 0; i < btns.length; i++) {
    //Прикрепляем событие для каждой отдельной кнопки
    //При нажатии на кнопку будет вызываться функция Click()
    btns[i].addEventListener("click", function (e) {
      Click(e.target.getAttribute("index"));
    });
  }
}
function Click(index) {
  //Получаем номер правильного ответа
  var correct = quiz.Click(index);

  //Находим все кнопки
  var btns = document.getElementsByClassName("button");

  //Делаем кнопки серыми
  for (var i = 0; i < btns.length; i++) {
    btns[i].className = "button button_passive";
  }

  //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
  if (quiz.type == 1) {
    if (correct >= 0) {
      btns[correct].className = "button button_correct";
    }
    if (index != correct) {
      btns[index].className = "button button_wrong";
    }
  } else {
    //Иначе просто подсвечиваем зелёным ответ пользователя
    btns[index].className = "button button_correct";
  }

  //Ждём секунду и обновляем тест
  setTimeout(Update, 1000);
}