//Полезные примеры типизации пропов
//Применяются в отношении компонентов, принимающих другие компоненты в качестве пропов:

/*
export declare interface AppProps {
  children1: JSX.Element // плохо, не подходит для массивов
  children2: JSX.Element | JSX.Element[] // средне, не подходит для строк
  children3: React.ReactChildren // несмотря на название, совсем не подходящий тип, это утилита
  children4: React.ReactChild[] // неплохо, принимает массив потомков
  children: React.ReactNode // самый лучший вариант, принимает все (см. крайние случаи ниже)
  functionChildren: (name: string) => React.ReactNode // рекомендуемая функция для типа пропа для рендеринга потомка
  style?: React.CSSProperties // для пропов стилей
  onChange?: React.FormEventHandler<HTMLInputElement> // события формы, типом общего параметра является `event.target`
  //props: Props & React.ComponentPropsWithoutRef<'button'> // для представления всех пропов элемента кнопки без передачи ее ссылок
  //props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef> // для представления всех пропов `MyButtonForwardedRef` и передачи ее ссылок
}
*/


//Крайние случаи React.ReactNode
//Выполнение данного кода завершится ошибкой:

/*
type Props = {
  children: React.ReactNode
}

function Comp({ children }: Props) {
  return <div>{children}</div>
}
function App() {
  return <Comp>{{}}</Comp> // Ошибка выполнения: объекты не являются валидными потомками React
}
*/