import React, { useState, useMemo } from 'react';
import { TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { ValidateFormProps } from '../../../../../../../../types/types';
import './ValidateForm.scss';

interface IAnswers {
  [attemp1: string]: null | boolean;
  attemp2: null | boolean;
  attemp3: null | boolean;
}

export const ValidateForm = ({ keyWord }: ValidateFormProps) => {
  const [value, setValue] = useState<string>('');
  const [showAnswer, setsSowAnswer] = useState(false);
  const [answers, setAnswers] = useState<IAnswers>({
    attemp1: null,
    attemp2: null,
    attemp3: null,
  });

  const onCheck = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setValue(e.target.value);

    if (value.length === keyWord.length) {
      if (value.trim().toLowerCase() === keyWord.trim().toLowerCase()) {
        setsSowAnswer(true);
        for (let key in answers) {
          if (answers[key] === null) {
            setAnswers(prevAnswers => {
              return { ...prevAnswers, [key]: true };
            });
            return;
          }
        }
      } else {
        for (let key in answers) {
          if (answers[key] === null) {
            setAnswers(prevAnswers => {
              return { ...prevAnswers, [key]: false };
            });
            setValue('');
            return;
          }
        }
      }
    }
  };

  return (
    <>
      <TextField
        variant="outlined"
        sx={{ width: '150px', mr: 2 }}
        size="small"
        label="odpowiedź"
        value={
          showAnswer ||
          (answers.attemp2 === false &&
            answers.attemp3 === false &&
            answers.attemp1 === false)
            ? keyWord
            : value
        }
        onChange={e => onCheck(e)}
        inputProps={{
          readOnly:
            showAnswer ||
            (answers.attemp2 === false &&
              answers.attemp3 === false &&
              answers.attemp1 === false)
              ? true
              : false,
        }}
      />
      {answers.attemp1 === null ? (
        <CheckIcon />
      ) : (
        <CheckIcon
          className={answers.attemp1 ? 'answer-succes' : 'answer-wrong'}
        />
      )}
      {answers.attemp2 === null ? (
        <CheckIcon />
      ) : (
        <CheckIcon
          className={answers.attemp2 ? 'answer-succes' : 'answer-wrong'}
        />
      )}
      {answers.attemp3 === null ? (
        <CheckIcon />
      ) : (
        <CheckIcon
          className={answers.attemp3 ? 'answer-succes' : 'answer-wrong'}
        />
      )}
    </>
  );
};
