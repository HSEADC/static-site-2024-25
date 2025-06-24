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
var results = [new Result("Вам стоит обязательно посмотреть его", 0), new Result("Вы повышены до Осла", 3), new Result("Претендент на Фиону", 6), new Result("Да вы самый настоящий Шрек", 9)];

//Массив с вопросами
var questions = [new Question("Какое животное является верным спутником Шрека?", [new Answer("Осел", 1), new Answer("Лев", 0), new Answer("Кот в сапогах", 0), new Answer("Жираф", 0)]), new Question("Какую принцессу Шрек должен спасти?", [new Answer("Золушку", 0), new Answer("Белоснежку", 0), new Answer("Спящую красавицу", 0), new Answer("Фиону", 1)]), new Question("Какой цвет кожи у Шрека?", [new Answer("Зеленый", 1), new Answer("Коричневый", 0), new Answer("Синий", 0), new Answer("Белый", 0)]), new Question("Какое существо является главным героем мультфильма «Шрек»?", [new Answer("Эльф", 0), new Answer("Дракон", 0), new Answer("Огр", 1), new Answer("Принцесса", 0)]), new Question("В каком лесу живет Шрек?", [new Answer("В волшебном лесу", 0), new Answer("На болоте", 1), new Answer("В черном лесу", 0), new Answer("В тропическом лесу", 0)]), new Question("Какую задачу ставит перед Шреком Лорд Фаркуад?", [new Answer("Спасти принцессу", 1), new Answer("Найти золото", 0), new Answer("Построить мост", 0), new Answer("Вырастить сына", 0)]), new Question("Какой персонаж постоянно говорит «Я не боюсь, я не боюсь!»? ", [new Answer("Шрек", 0), new Answer("Кот в сапогах", 0), new Answer("Осел", 1), new Answer("Дракон", 0)]), new Question("Какой предмет осел использует, чтобы попытаться убедить Шрека стать его другом?", [new Answer("Зеркало", 0), new Answer("Леденец", 0), new Answer("Пирог", 0), new Answer("Цветок", 1)]), new Question("Какой музыкальный трек стал знаковым для «Шрека»?", [new Answer("All Star", 1), new Answer("Let It Go", 0), new Answer("Circle of Life", 0), new Answer("A Whole New World", 0)]), new Question("Какой основной урок усваивают Шрек и Фиона в конце фильма?", [new Answer("Внешность не важна", 0), new Answer("Друзья важнее всего", 0), new Answer("Любовь — это только физическое притяжение", 0), new Answer("Принятие себя", 1)])];

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