import PropTypes from 'prop-types';
import { BtnList, Button } from './FeedbackOptions.styled';

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
      {Object.keys(options).map(option => (
        <Button
          type="button"
          key={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </BtnList>
  );
}
