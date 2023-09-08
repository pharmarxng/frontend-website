import { useState } from 'react';
import { IQuestionaire } from '../utils/interfaces';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import CircularWrapper from './CircularWrapper';

interface SingleQuestionaireProps {
  questionaire: IQuestionaire;
}

const SingleQuestionaire = ({ questionaire }: SingleQuestionaireProps) => {
  const [showAnswer, setshowAnswer] = useState<boolean>(false);
  const { question, answer } = questionaire;
  const handleAnswerToggle = () => {
    setshowAnswer(!showAnswer);
  };
  return (
    <div className="text-base/5 sm:text-3xl/10 border-b-2 border-gray-200 py-8">
      <div className="flex justify-between items-center">
        <div className="">{question}</div>
        <CircularWrapper clicked={handleAnswerToggle}>
          {!showAnswer ? (
            <AiOutlinePlus className="text-white h-2.5 w-2.5 sm:h-6 sm:w-6" />
          ) : (
            <AiOutlineMinus className="text-white h-2.5 w-2.5 sm:h-6 sm:w-6" />
          )}
        </CircularWrapper>
      </div>
      {showAnswer && <div className="mt-8">{answer}</div>}
    </div>
  );
};

export default SingleQuestionaire;
