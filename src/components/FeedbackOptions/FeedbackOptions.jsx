import PropTypes from 'prop-types';
import { BtnList, Button } from './FeedbackOptions.styled';

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </BtnList>
  );
}

// <div className="FeedbackBox">
//   <h1>Please leave feedback</h1>
//   <div className="ButtonBox">
//     <button type="button" onClick={() => this.handleIncrement}>
//       Good
//     </button>
//     <button type="button" onClick={this.handleIncrement}>
//       Neutral
//     </button>
//     <button type="button" onClick={this.handleIncrement}>
//       Bad
//     </button>
//   </div>
// </div>
