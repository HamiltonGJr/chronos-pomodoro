import type React from 'react';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

function DefaultInput({ type, id, labelText }: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} type={type} />
    </>
  );
}

export { DefaultInput };
