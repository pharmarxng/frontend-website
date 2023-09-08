import { questionaireList } from '../../utils/constants';
import SingleQuestionaire from '../SingleQuestionaire';

const Questionaire = () => {
  const questionaireContent = questionaireList.map((i) => {
    return (
      <div>
        <SingleQuestionaire questionaire={i} />
      </div>
    );
  });
  return (
    <div className="text-black text-3xl/10 sm:text-6xl/[77px] py-5 sm:py-12">
      <div className="">Have questions?</div>
      <div className="text-deepBlue-100">Get answers</div>
      <div>{questionaireContent}</div>
    </div>
  );
};

export default Questionaire;
