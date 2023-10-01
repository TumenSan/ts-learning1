
export interface StandartComponentProps {
  title?: string
  number: number
}

const Pointer = ({title = '', number}: StandartComponentProps) => {
  return (
    <div>
      {title}: {number}
    </div>
  );
}

export default Pointer;