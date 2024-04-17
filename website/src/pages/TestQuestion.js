import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from './WhatsAppButton';
import Link from 'next/link';
import Head from 'next/head';
import styles from './hearing.module.css';

const TestQuestions = () => {
  const router = useRouter();
  const { name, age, number, gender, device } = router.query;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [audioElement, setAudioElement] = useState(null);
  const [preTestOver, setPreTestOver] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const preTestQuestions = [
    {
      question: 'How would you describe your hearing?',
      audioSrc: '/Audio/PreTest1.mp3',
      options: ['I have a lot of trouble', 'I have a little trouble', 'Good', 'Excellent'],
    },
    {
      question: 'In conversation in a quiet environment, do people seem to mumble?',
      audioSrc: '/Audio/PreTest2.mp3',
      options: ['Always', 'Often', 'Occasionally', 'Never'],
    },
    {
      question: 'Do you find it hard to follow conversation in a noisy environment?',
      audioSrc: '/Audio/PreTest3.mp3',
      options: ['Always', 'Often', 'Occasionally', 'Never'],
    },
    {
      question: 'Do you feel like one ear hears significantly better than the other one? If so, which one?',
      audioSrc: '/Audio/PreTest4.mp3',
      options: ['Left', 'Right', 'Both about the same'],
    },
    {
      question: 'Lets start the testing with your "Right Ear" first.🦻🏽 Make sure you are in a quiet room!!',
      audioSrc: '/Audio/PreTest5.mp3',
      options: [],
    },
  ];

  const testQuestions = [
    {
      question: 'Test 1 - How comfortably are you able to hear the sound?',
      audioSrc: '/Audio/Task1.mp3',
      options: ['Very Comfortably', 'Somewhat Comfortably', 'Uncomfortably', 'Very Uncomfortably', 'Not able to hear at all'],
    },
    {
      question: 'Test 2 - How comfortably are you able to hear the sound?',
      audioSrc: '/Audio/Task2.mp3',
      options: ['Very Comfortably', 'Somewhat Comfortably', 'Uncomfortably', 'Very Uncomfortably', 'Not able to hear at all'],
    },
    {
      question: 'Test 3 -  How comfortably are you able to hear the sound?',
      audioSrc: '/Audio/Task3.mp3',
      options: ['Very Comfortably', 'Somewhat Comfortably', 'Uncomfortably', 'Very Uncomfortably', 'Not able to hear at all'],
    },
    {
      question: 'Now we will be testing your "Left Ear". 🦻🏽',
      audioSrc: '/Audio/PreTest5.mp3',
      options: [],
    },
    {
      question: 'Test 1 - How comfortably are you able to hear the sound?',
      audioSrc: '/Audio/Task4.mp3',
      options: ['Very Comfortably', 'Somewhat Comfortably', 'Uncomfortably', 'Very Uncomfortably', 'Not able to hear at all'],
    },
    {
      question: 'Test 2 - How comfortably are you able to hear the sound?',
      audioSrc: '/Audio/Task5.mp3',
      options: ['Very Comfortably', 'Somewhat Comfortably', 'Uncomfortably', 'Very Uncomfortably', 'Not able to hear at all'],
    },
    {
      question: 'Test 3 -  How comfortably are you able to hear the sound?',
      audioSrc: '/Audio/Task3.mp3',
      options: ['Very Comfortably', 'Somewhat Comfortably', 'Uncomfortably', 'Very Uncomfortably', 'Not able to hear at all'],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState(Array(preTestQuestions.length).fill(''));
  const [showResult, setShowResult] = useState(false);
  const [nextButtonText, setNextButtonText] = useState('Next');

  useEffect(() => {
    if (audioElement) {
      audioElement.load();
      audioElement.play();
    }
  }, [audioElement]);

  useEffect(() => {
    if (audioElement) {
      audioElement.pause();
    }
    setAudioElement(null);
  }, [currentQuestionIndex, audioElement]);

  useEffect(() => {
    if (preTestOver && currentQuestionIndex === preTestQuestions.length - 1) {
      setNextButtonText('End Test');
    } else {
      setNextButtonText('Next');
    }
  }, [preTestOver, currentQuestionIndex, preTestQuestions.length]);

  const handleOptionClick = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (!preTestOver) {
      if (currentQuestionIndex === preTestQuestions.length - 1) {
        setPreTestOver(true);
        setCurrentQuestionIndex(0);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      if (currentQuestionIndex < testQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        const minResult = 20; // Mild
        const maxResult = 40; // Moderate
        const randomResult = Math.floor(Math.random() * (maxResult - minResult + 1)) + minResult;
        setTestResult(randomResult);
        setShowResult(true);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (!preTestOver && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (preTestOver && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleStartTest = () => {
    setPreTestOver(true);
    setCurrentQuestionIndex(0);
  };

  return (
    <div>
      <Navbar />
      <WhatsAppButton />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online Hearing Test</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <div className={styles.testQuestions}>
        <div className={styles.testHeading}>
          <h1>Test Questions</h1>
          <div className={styles.testparagraph}>
            <p>Name - {name}</p>
            <p>Age - {age}</p>
            <p>Number - {number}</p>
            <p>Gender - {gender}</p>
            <p>Device - {device}</p>
          </div>
        </div>


        {showResult ? (
          <div className={styles.testContainer}>
           <center> <h2 style={{color:"#f39c12", marginBottom:"20px"}}>Test Result</h2>
            <button type='button' className={styles.resultBtn} style={{ marginBottom:"20px"}}>Mild to Moderate</button>
            <p>We will reach out to you regarding your hearing test soon!</p>
            <div>
              <Link href="/">
                <button className={styles.testHome}>Go to Home</button>
              </Link>
              <Link href="/contact">
                <button className={styles.testContact}>Contact Us</button>
              </Link>
            </div></center>
          </div>
        ) : (
          <div className={styles.testContainer}>
            <h3>{!preTestOver ? preTestQuestions[currentQuestionIndex].question : testQuestions[currentQuestionIndex].question}</h3>
            <center>
              <audio
                className={styles.testAudio}
                ref={(audio) => setAudioElement(audio)}
                autoPlay
                loop
              >
                <source src={!preTestOver ? preTestQuestions[currentQuestionIndex].audioSrc : testQuestions[currentQuestionIndex].audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </center>
            <div className={styles.testOptions}>
              {!preTestOver ? preTestQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`${styles.optionButton} ${selectedOptions[currentQuestionIndex] === option ? styles.selectedOption : ''}`}
                >
                  {option}
                </button>
              )) : testQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`${styles.optionButton} ${selectedOptions[currentQuestionIndex] === option ? styles.selectedOption : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <center>
            {currentQuestionIndex !== 0 && (
  <button onClick={handlePreviousQuestion} className={styles.TestButtons1}>&#8592; Previous</button>
)}
              <button onClick={handleNextQuestion} className={styles.TestButtons2}>
                {!preTestOver ? 'Next' : nextButtonText} &#8594;
              </button>
            </center>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TestQuestions;
