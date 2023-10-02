//Примеры основных типов пропов
//Список типов, часто используемых в React+TS приложениях:

/*
type AppProps = {
  message: string
  count: number
  disabled: boolean
  // массив типа
  names: string[]
  // альтерантивные (union) строки
  status: 'idle' | 'loading' | 'success' | 'error'
  // любой объект, свойства которого не используются (заменитель, placeholder)
  obj: object
  obj2: {} // почти то же самое, что `object`, в точности то же самое, что `Object`
  obj3: {
    id: string
    title: string
  }
  // массив объектов
  objArr: {
    id: string
    title: string
  }[]
  // объект-словарь с любым количеством свойств одинакового типа
  dict1: {
    [key: string]: MyType
  }
  dict2: Record<string, MyType> // эквивалент dict1
  // любая функция, которая не вызывается (не рекомендуется)
  onSomething: Function
  // функция, которая ничего не принимает и не возвращает
  onClick: () => void
  //  функция с именованными пропами
  onChange: (id: number) => void
  // альтернативный синтаксис типа функции, принимающей событие
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
  // опциональный проп
  optional?: MyType
}
*/