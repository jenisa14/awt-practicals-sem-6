import C from "./C";

type Props = {
  message: string;
};

function B({ message }: Props) {
  return (
    <div>
      <h2>Component B</h2>
      <C message={message} />
    </div>
  );
}

export default B;   