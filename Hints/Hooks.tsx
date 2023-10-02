//useState

//В случае инициализации хука нулевым значением, следует 
//явно определить тип с помощью альтернативных типов (union types):

//const [user, setUser] = useState<IUser | null>(null)

// позже
//setUser(newUser)


//useEffect

//Хук useEffect всегда должен возвращать функцию очистки 
//(cleanup function) или undefined. Об этом легко забыть, используя стрелочные функции:
/*
function DelayedEffect(props: { ms: number }) {
  const { ms } = props

  useEffect(() =>
    setTimeout(() => {
      // ...
    }, ms),
  [ms])
  // setTimeout неявно возвращает число,
  // поскольку мы забыли обернуть тело
  // стрелочной функции в фигурные скобки
  return null
}
*/
//Для того, чтобы убедиться, что из функции ничего не возвращается, можно использовать ключевое слово void.


//useRef

//Для создании переменной для хранения ссылки (ref) без начального значения (null) существует три варианта:
/*
const ref1 = useRef<HTMLElement>(null!)
const ref2 = useRef<HTMLElement>(null)
const ref3 = useRef<HTMLElement | null>(null)
*/
/*
Первый вариант: отключение проверки на null для ref1.current, предназначен для передачи во встроенный 
атрибут ref, которым управляет React (React автоматически устанавливает значение current).

! - это оператор ненулевого утверждения (non-null assertion operator). 
Он утверждает, что любое выражение перед ним не является null или undefined. useRef<HTMLElement>(null!) 
означает, что мы инициализируем ссылку значением null, но сообщаем TypeScript, что оно не является нулевым:

function MyComponent() {
  const ref1 = useRef<HTMLDivElement>(null!)
  useEffect(() => {
    doSomethingWith(ref1.current)
    // `TypeScript` не будет осуществлять проверку на `null` - ref1 && ref1.current
  })
  return <div ref={ref1}>...</div>
}
*/

/*
Во втором случае типом возвращаемого значения будет RefObject вместо MutableRefObject. Это означает, что попытка присвоения значения ref2.current закончится тем, что будет выброшено исключение TypeError.

В третьем случае ref3.current будет изменяемым, что можно использовать для создания "переменных экземпляра" (instance variables). Такими переменными мы управляем самостоятельно:
*/
/*
function TextInputWithFocusButton() {
  // инициализируем с помощью `null`, но сообщаем `TypeScript`, что ищем HTMLInputElement
  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = () => {
    // строгая проверка на `null` вынуждает нас убедиться, что `inputRef` и `inputRef.current` существуют
    // если `current` существует, значит, его типом является HTMLInputElement,
    // следовательно, у него есть метод `focus()`
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={onClick}>Установить фокус на поле для ввода текста</button>
    </>
  )
}
*/