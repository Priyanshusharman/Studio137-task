import React, { useState } from 'react';
import './Question.css';

const Question = () => {
  const questions = [
    "I have ambitious aims of making a difference.",
    "My leadership journey has progressed as I anticipated.",
    "I have spent fewer than 4 years in full time service or ministry."
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setProgress((currentQuestion + 1) / questions.length * 100);
  };

  const handleNext = () => {
    if (selectedOption) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="IdealisticContainer">
      <div className="IdealisticTabs">
        <div className="IdealisticTab" name="IdealisticTab">
          <div className="IdealisticProgress">
            <div className="IdealisticProgressBar" style={{ width: `${progress}%` }}></div>
          </div>
          <label htmlFor="IdealisticTab">
            IDEALISTIC
          </label>
        </div>
        <div className="DisillusionedTab" name="DisillusionedTab">
          <div className="IdealisticProgress">
            <div className="IdealisticProgressBar" style={{ width: `${0}%` }}></div>
          </div>
          <label htmlFor="DisillusionedTab">
            DISILLUSIONED
          </label>
        </div>
        <div className="CynicalTab" name="CynicalTab">
          <div className="IdealisticProgress">
            <div className="IdealisticProgressBar" style={{ width: `${0}%` }}></div>
          </div>
          <label htmlFor="CynicalTab">
            CYNICAL
          </label>
        </div>
        <div className="HopefullTab" name="HopefullTab">
          <div className="IdealisticProgress">
            <div className="IdealisticProgressBar" style={{ width: `${0}%` }}></div>
          </div>
          <label htmlFor="HopefullTab">
            HOPEFUL
          </label>
        </div>
      </div>
      <div className="IdealisticContent">

        <div className="IdealisticProgressText">{currentQuestion + 1}/{questions.length}</div>
        <div className="IdealisticQuestion">{questions[currentQuestion]}</div>
        <div className="IdealisticOptions">
          {["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"].map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="response"
                value={index * 25}
                checked={selectedOption === `${index * 25}`}
                onChange={handleChange}
              />
              <div className="IdealisticOptionCircle"></div>
              {option}
            </label>
          ))}
        </div>
        <div className="navigation">
          <button className="prev">← PREV</button>
          <button className="next">NEXT →</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
