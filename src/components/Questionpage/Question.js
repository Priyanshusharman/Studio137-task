import React, { useState } from 'react';
import './Question.css';
import { useNavigate } from 'react-router-dom';
import arrowleft from "../../fontimage/arrow-left-solid.svg"
import arrowright from "../../fontimage/arrow-right-solid.svg"
import circle from "../../fontimage/circle-regular.svg"
const Question = () => {
  const [value, setValue] = useState(null);
  const [questionNo, setQuestionNo] = useState(0);
  const [formData, setFormData] = useState([0, 0, 0]);
  const navigate = useNavigate();
  const marks = [
    { value: 0, label: 'Strongly Disagree' },
    { value: 25, label: 'Disagree' },
    { value: 50, label: 'Neutral' },
    { value: 75, label: 'Agree' },
    { value: 100, label: 'Strongly Agree' },
  ];

  const handleNext = (res) => {
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];
      updatedFormData[questionNo] = res;
      return updatedFormData;
    });

    if (questionNo < questions.length - 1) {
      setQuestionNo(questionNo + 1);
      setValue(null);
    } else if (questionNo === questions.length - 1) {
      setQuestionNo(questionNo + 1);
    }
  };

  const handlePrev = () => {
    if (questionNo > 0) {
      setQuestionNo(questionNo - 1);
      setValue(0);
    }
    else {
      //reset
      setQuestionNo(0);
      setFormData([0,0,0]);
      navigate("/");
      

    }
  };

  const handleChange = (event) => {
    setValue(Number(event.target.value));
    setTimeout(() => {
      handleNext(Number(event.target.value));
    }, 500);
  };

  const questions = [
    { text: 'I have ambitious aims of making a difference.' },
    { text: 'My leadership journey has progressed as I anticipated.' },
    { text: 'I have spent fewer than 4 years in full-time service or ministry.' },
    { text: 'Done' },
  ];

  return (
    <div className="contain-main">


      <div className="container">
        <div className="progress-bars">
          <div className="progress-bar-container">
            <div className="progress-bar-default" >
              <div className="progress-bar" style={{ width: `${((questionNo+1) / 3) * 100 }%` }}></div>
            </div>

            <p className="label">IDEALISTIC</p>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-default" >
              <div className="progress-bar" style={{ width: '0%' }}></div>
            </div>
            <p className="label">DISILLUSIONED</p>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar-default" >
              <div className="progress-bar" style={{ width: '0%' }}></div>
            </div>
            <p className="label">CYNICAL</p>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-default" >
              <div className="progress-bar" style={{ width: '0%' }}></div>
            </div>
            <p className="label">HOPEFUL</p>
          </div>
        </div>
        {questionNo < 3 && (
          <div className="question-container">
            <h3 className="question-number">{questionNo + 1}/3</h3>
            <p className="question-text">{questions[questionNo].text}</p>
         
            <div className="circle-point">
              <div className="c1"><img src={circle} alt="circle1"  className='circle-class c1'/></div>
              <div className="c1"><img src={circle} alt="circle1"  className='circle-class c2'/></div>
              <div className="c1"><img src={circle} alt="circle1"  className='circle-class c3'/></div>
              <div className="c1"><img src={circle} alt="circle1"  className='circle-class c4'/></div>
              <div className="c1"><img src={circle} alt="circle1"  className='circle-class c5'/></div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="25"
              value={value || 0}
              onChange={handleChange}
              className="slider"
              name='slideinput'
            />
            <div className="marks">
              {marks.map((mark) => (
                <span key={mark.value} className="mark-label">{mark.label}</span>
              ))}
            </div>
          </div>
        )}
        {questionNo === 3 && (
          <div className="results-container">
            <h1 style={{ margin: 105 }}>Thank you</h1>
          </div>
        )}
        <div className="button-container">
          <button className="button prev" onClick={handlePrev} >
            <img src={arrowleft} alt="Left"/>
            PREV
          </button>
          <button className="button next" onClick={() => handleNext(value)} disabled={value === null}>
            NEXT
            <img src={arrowright} alt="Right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
