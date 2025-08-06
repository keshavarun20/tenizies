type DieProps = {
  value: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Die = ({ value, onClick }: DieProps) => {
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

export default Die;
