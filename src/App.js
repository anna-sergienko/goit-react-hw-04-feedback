import { useState } from "react";
import { Wrapper } from "./App.styled";
import  Section  from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";




export const  App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const countTotalFeedback = () => {
  let feedbackNum = good + bad + neutral;
  return feedbackNum;
  };


  const handleIncrement = (e) => {
    const option = e.target.textContent;
  
    switch (option) {

      case 'good':
        setGood(prev => prev + 1)
        break

      case 'neutral':
        setNeutral(prev => prev + 1)
        break

      case 'bad':
        setBad(prev => prev + 1)
        break

      default:
        return
    }
  }


  const countPositiveFeedbackPercentage = () => {
    return Math.round(100 * good / countTotalFeedback());
  };


    return (
      <Wrapper>
      <Section title={"Pease leave feedback"}>
 <FeedbackOptions
        options={{good, neutral, bad}}
        onLeaveFeedback={handleIncrement}
      />
      </Section>

      <Section title="Statistics">
          {countTotalFeedback() ? (
<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage()} />) :
            (
              <Notification message={"There is no feedback"}/>
          )}
      </Section>
       </Wrapper> 
    )
  }

 
  
