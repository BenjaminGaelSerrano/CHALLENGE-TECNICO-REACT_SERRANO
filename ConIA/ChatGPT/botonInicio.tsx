export default function BotonInicio({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button onClick={onClick} disabled={disabled}>
      Iniciar
    </button>
  );
}