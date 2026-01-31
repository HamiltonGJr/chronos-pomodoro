import type React from 'react';

type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;

function DefaultInput({ type, id }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>Task</label>
      <input id={id} type={type} />
    </>
  );
}

export { DefaultInput };
