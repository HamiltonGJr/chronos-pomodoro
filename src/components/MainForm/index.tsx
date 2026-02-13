import { PlayCircleIcon } from 'lucide-react';

import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

function MainForm() {
  return (
    <>
      {' '}
      <form className='form' action=''>
        <div className='formRow'>
          <DefaultInput
            id='input'
            type='text'
            labelText='Task'
            placeholder='Digite sua tarefa'
          />
        </div>

        <div className='formRow'>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='formRow'>
          <Cycles />
        </div>

        <div className='formRow'>
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </form>
    </>
  );
}

export { MainForm };
