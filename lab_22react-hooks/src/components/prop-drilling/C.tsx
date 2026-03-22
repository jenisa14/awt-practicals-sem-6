type Props = {
  message: string;
};

function C({ message }: Props) {
  return (
    <div>
      <h2>Component C</h2>
      <p>{message}</p>
    </div>
  );
}

export default C;