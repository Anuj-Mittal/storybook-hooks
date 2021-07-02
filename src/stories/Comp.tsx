import { Button } from "./Button";
import { useCounter } from "./useCounter";

export interface CounterProps {
  initialValue: number;
  min?: number | null;
  max?: number | null;
}
export const Comp = ({
  initialValue = 0,
  min = null,
  max = null,
}: CounterProps) => {
  const [current, actions] = useCounter(initialValue, min, max);

  return (
    <div>
      <h3>Min : {min}</h3>
      <h3>Max : {max}</h3>
      <div>
        <Button label="Decrement" onClick={() => actions.dec()}></Button>
        <span>{current}</span>
        <Button label="Increment" onClick={() => actions.inc()}></Button>
      </div>
      <div>
        <Button
          primary={true}
          label="Reset Counter"
          size="large"
          onClick={() => actions.reset()}
        ></Button>
      </div>
    </div>
  );
};
