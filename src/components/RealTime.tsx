import { useRealTime } from "../api/hooks/useRealTime";

export const RealTime = () => {
  const { current, mutate } = useRealTime();

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
