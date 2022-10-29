import { useRealTime } from "../api/hooks/useRealTime";

export const RealTime = ({ serializedKey }: { serializedKey?: string }) => {
  const { current, mutate } = useRealTime(serializedKey);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    mutate();
  };

  return (
    <>
      <button onClick={onClick}>Reload</button>
      <div>
        <span>{current}</span>
      </div>
    </>
  );
};
