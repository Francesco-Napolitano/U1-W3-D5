/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let a = 10
let b = 20
let sum = a + b
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21)
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: 'Francesco',
  surname: 'Napolitano',
  age: '19',
}
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['Python', 'Javascript']
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Basics of C++')
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
  let random = Math.floor(Math.random() * 6) + 1
  return random
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else if (num2 > num1) {
    return num2
  } else {
    return 'I due numeri sono uguali'
  }
}

console.log(whoIsBigger(7, 1))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (str) => {
  return str.split(' ')
}

console.log(splitMe('Hello - World'))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (str, bool) => {
  if (bool === true) {
    return str.slice(1)
  } else {
    return str.slice(0, -1)
  }
}
console.log(deleteOne('Hello World', false))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (str) => {
  return str.replace(/[0-9]/g, '') //elimina tutte le cifre numeriche comprese tra 0 e 9 e restituisce la stringa senza più cifre
}

console.log(onlyLetters('Ciao 7374Amic0o'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (str) => {
  let emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  // ho utilizzato le regex, ovvero strumenti utili per analizzare stringhe di testo. La variabile emailValidation creata è un esempio di regex, e utilizzo il metodo test() per validare la mail inserita come parametro
  if (emailValidation.test(str)) {
    return true
  } else {
    return false
  }
}
console.log(isThisAnEmail('nuovaemail15@gmail.com'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const date = new Date()
const daysWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const whatDayIsIt = () => {
  const today = date.getDay()
  return daysWeek[today]
}

console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().


  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (num) => {
  const object = { sum: 0, values: [] }
  for (let i = 0; i < num; i++) {
    const diceAgain = dice()
    object.values.push(diceAgain)
    object.sum += diceAgain
    console.log(diceAgain)
  }
  console.log(object)
  return object.sum
}

console.log(rollTheDices(3))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (day) => {
  const now = new Date()
  const today = now.getDate()
  const sum = today - day
  if (today >= day) {
    return 'Sono passati ' + sum + ' giorni'
  } else {
    return sum + ' giorni rimasti'
  }
}

console.log(howManyDays(5))
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const now = new Date()
const isTodayMyBirthday = (day, month) => {
  const today = now.getDate()
  const thisMonth = now.getMonth()
  if (day === today && thisMonth === month) {
    return true
  } else {
    return false
  }
}
console.log(isTodayMyBirthday(18, 12))

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const object = {
  color: 'red',
  height: '2 meters',
}

const deleteProp = (obj, str) => {
  delete obj[str]
  return obj
}

// console.log(object['color'])
console.log(deleteProp(object, 'color'))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const createContainer = () => {
  const container = document.getElementById('container')
}

/* ESERCIZIO 21
Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const select = () => {
  const td = document.querySelectorAll('td')
}

/* ESERCIZIO 22
Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const generateTd = () => {
  const td = document.querySelectorAll('td')
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText)
  }
}

/* ESERCIZIO 23
Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const background = () => {
  const a = document.querySelectorAll('a')
  for (let i = 0; i < a.length; i++) {
    a[i].style.background = 'red'
  }
}

/* ESERCIZIO 24
Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addElement = () => {
  const li = document.createElement('li')
  const ul = document.getElementById('ul')
  li.innerText = 'something'
  ul.appendChild(li)
}

/* ESERCIZIO 25
Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const emptyList = () => {
  const ul = document.getElementById('myList')
  emptyList.innerHTML = ''
}
/* ESERCIZIO 26
Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addTr = () => {
  const tr = document.querySelectorAll('tr')
  for (let i = 0; i < tr.length; i++) {
    tr.classList.add('test')
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

Esempio:
halfTree(3)

*
**
***

*/

const halfTree = (n) => {
  let tree = ''
  for (let i = 1; i <= n; i++) {
    tree += '*'
    console.log(tree)
  }
  return tree
}

halfTree(5)

/* ESERCIZIO 28
Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

Esempio:
tree(3)

*
***
*****

*/

/* ESERCIZIO 29
Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = (num) => {
  if (num % 1 === 0 && num % num === 0) {
    if (num % 2 === 1 || num % 3 === 1 || num % 5 === 1 || num % 7 === 1)
      return true
  } else {
    return false
  }
}

console.log(isItPrime(5))

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
  const newMovie = movies.sort((a, b) => b.Year - a.Year)
  return newMovie
}
console.log(newestMovie())

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
  */

const countMovies = () => {
  const onlyMovies = movies.length
  return onlyMovies
}
console.log('Quanti film ci sono in tutto?', countMovies())

/* ESERCIZIO 14
 Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
 */
const onlyTheYears = () => {
  const years = []
  movies.forEach((film) => {
    years.push(film.Year)
  })
  return years
}
console.log(onlyTheYears())

/* ESERCIZIO 15
Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = () => {
  const milleniumFilms = movies.filter((num) => {
    if (num.Year.startsWith('19')) {
      return num
    }
  })
  return milleniumFilms
}

console.log(onlyInLastMillennium())

/* ESERCIZIO 16
Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
  let somma = 0
  const sum = movies.forEach((num) => {
    somma += parseInt(num.Year)
  })
  return somma
}

console.log(sumAllTheYears())

/* ESERCIZIO 17
Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (str) => {
  const filmTitle = movies.filter((film) => {
    if (film.Title.includes(str)) {
      return film
    }
  })
  return filmTitle
}

console.log(searchByTitle('Lord of the '))

/* ESERCIZIO 18
Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
"match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const emptyObj = {}
const searchAndDivide = (str) => {
  const filmTitle = movies.filter((film) => {
    if (film.Title.includes(str)) {
      return film
    }
  })
  const filmNotSearched = movies.filter((film) => {
    if (!film.Title.includes(str)) {
      return film
    }
  })
  return { match: filmTitle, unmatch: filmNotSearched }
}
console.log(searchAndDivide('Avengers:'))

/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (num) => {
  const remove = movies.filter((value, index) => num !== index)
  return remove
}

console.log(removeIndex(1))
