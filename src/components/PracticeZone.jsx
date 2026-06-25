import React, { useState } from 'react';
import { IconCheck, IconX, IconArrowRight, IconRefresh, IconBook } from '@tabler/icons-react';

const QUIZ_DATA = [
  {
    id: 1,
    type: 'mcq',
    question: "Which of the following enzymes is primarily responsible for synthesizing the new DNA strand during replication?",
    options: ["DNA Helicase", "DNA Polymerase", "RNA Primase", "DNA Ligase"],
    correctAnswer: "DNA Polymerase",
    explanation: "DNA Polymerase adds nucleotides to the growing DNA chain. Helicase unwinds the DNA, Primase creates the RNA primer, and Ligase joins Okazaki fragments."
  },
  {
    id: 2,
    type: 'truefalse',
    question: "True or False: According to Mendel's Law of Segregation, alleles for a trait separate during gamete formation.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Mendel's Law of Segregation states that the two alleles for a heritable character segregate (separate from each other) during gamete formation and end up in different gametes."
  },
  {
    id: 3,
    type: 'fillin',
    question: "The observable physical or biochemical characteristics of an organism, as determined by both genetic makeup and environmental influences, is called its ________.",
    correctAnswer: "phenotype",
    explanation: "The phenotype is the composite of an organism's observable characteristics or traits, such as its morphology, development, biochemical or physiological properties, behavior, and products of behavior."
  }
];

export default function PracticeZone() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const currentQuestion = QUIZ_DATA[currentQuestionIdx];

  const handleSubmit = () => {
    if (!selectedAnswer && currentQuestion.type !== 'fillin') return;
    
    let isCorrect = false;
    if (currentQuestion.type === 'fillin') {
      isCorrect = selectedAnswer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase();
    } else {
      isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    }

    if (isCorrect) setScore(score + 1);
    setIsAnswerSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIdx < QUIZ_DATA.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedAnswer('');
      setIsAnswerSubmitted(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer('');
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizComplete(false);
  };

  const renderQuestionInput = () => {
    if (currentQuestion.type === 'mcq' || currentQuestion.type === 'truefalse') {
      return (
        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;
            let buttonClass = "w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 font-body-md text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 flex justify-between items-center active:scale-[0.99] ";
            
            if (!isAnswerSubmitted) {
              buttonClass += isSelected 
                ? "border-primary bg-primary/10 text-primary" 
                : "border-[var(--border-floating-card)] bg-surface-container text-on-surface hover:border-primary/50 hover:bg-surface-container-high";
            } else {
              if (isCorrect) {
                buttonClass += "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
              } else if (isSelected && !isCorrect) {
                buttonClass += "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400";
              } else {
                buttonClass += "border-[var(--border-floating-card)] bg-surface-container/50 text-on-surface-variant opacity-50";
              }
            }

            return (
              <button 
                key={idx}
                onClick={() => !isAnswerSubmitted && setSelectedAnswer(option)}
                disabled={isAnswerSubmitted}
                className={buttonClass}
              >
                <span>{option}</span>
                {isAnswerSubmitted && isCorrect && <IconCheck size={20} className="text-green-500" />}
                {isAnswerSubmitted && isSelected && !isCorrect && <IconX size={20} className="text-red-500" />}
              </button>
            );
          })}
        </div>
      );
    } else if (currentQuestion.type === 'fillin') {
      const isCorrect = selectedAnswer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase();
      let inputClass = "w-full px-5 py-4 rounded-xl border text-base font-body-md bg-surface-container focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ";
      if (isAnswerSubmitted) {
        inputClass += isCorrect ? "border-green-500 text-green-700 dark:text-green-400" : "border-red-500 text-red-700 dark:text-red-400";
      } else {
        inputClass += "border-[var(--border-floating-card)] text-on-surface";
      }

      return (
        <div className="flex flex-col gap-3">
          <input 
            type="text" 
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
            disabled={isAnswerSubmitted}
            placeholder="Type your answer here..."
            className={inputClass}
          />
          {isAnswerSubmitted && (
            <div className={`flex items-center gap-2 mt-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? <IconCheck size={20} /> : <IconX size={20} />}
              <span className="font-body-md text-sm">
                {isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`}
              </span>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <section className="py-32 px-gutter bg-transparent relative min-h-screen transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(var(--color-outline),0.1)] to-transparent"></div>
      
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-headline-lg font-bold text-headline-lg-mobile md:text-4xl text-on-surface mb-3 text-balance">Practice Zone</h2>
            <p className="font-body-md font-normal text-lg text-on-surface-variant opacity-80">Test your knowledge with interactive quizzes.</p>
          </div>
          <button 
            onClick={() => setShowSummary(!showSummary)}
            className="px-5 py-2.5 rounded-full border border-primary/30 text-primary font-label-md flex items-center gap-2 bg-primary/5 hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <IconBook size={18} /> {showSummary ? "Hide Summary" : "Read Chapter Summary"}
          </button>
        </div>

        {showSummary && (
          <div className="bg-surface-container-low border border-[var(--border-floating-card)] rounded-2xl p-6 mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">Genetics & Evolution Summary</h3>
            <div className="prose prose-sm dark:prose-invert max-w-none text-on-surface-variant font-body-md leading-relaxed">
              <p className="mb-2"><strong className="text-on-surface">Mendelian Genetics:</strong> Principles include the Law of Dominance, Law of Segregation, and Law of Independent Assortment.</p>
              <p className="mb-2"><strong className="text-on-surface">DNA Replication:</strong> It is semiconservative, involving enzymes like Helicase (unwinding), DNA Polymerase (synthesis), and Ligase (joining Okazaki fragments).</p>
              <p><strong className="text-on-surface">Terminology:</strong> Phenotype is the observable physical traits, while Genotype is the genetic makeup of an organism.</p>
            </div>
          </div>
        )}

        <div className="bg-surface-container-lowest rounded-3xl border border-[var(--border-floating-card)] shadow-[var(--shadow-floating-card)] overflow-hidden">
          {!quizComplete ? (
            <div className="flex flex-col">
              {/* Quiz Header / Progress */}
              <div className="bg-surface-container px-6 py-4 border-b border-[var(--border-nav-layout)] flex justify-between items-center">
                <span className="font-label-md font-semibold text-primary uppercase tracking-widest text-xs">
                  Question {currentQuestionIdx + 1} of {QUIZ_DATA.length}
                </span>
                <span className="font-label-md font-semibold text-on-surface-variant text-xs uppercase tracking-widest">
                  Score: {score}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-1 bg-surface-container-high">
                <div 
                  className="h-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestionIdx + 1) / QUIZ_DATA.length) * 100}%` }}
                />
              </div>

              {/* Question Content */}
              <div className="p-6 md:p-10">
                <h3 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold leading-snug mb-8">
                  {currentQuestion.question}
                </h3>

                {renderQuestionInput()}

                {/* Feedback & Actions */}
                <div className="mt-8 pt-8 border-t border-[var(--border-nav-layout)] min-h-[100px] flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                  <div className="flex-1">
                    {isAnswerSubmitted && (
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 animate-in fade-in duration-300">
                        <p className="font-body-md text-sm text-on-surface-variant">
                          <span className="font-bold text-on-surface block mb-1">Explanation:</span>
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-shrink-0 w-full md:w-auto flex justify-end">
                    {!isAnswerSubmitted ? (
                      <button 
                        onClick={handleSubmit}
                        disabled={!selectedAnswer && currentQuestion.type !== 'fillin'}
                        className="w-full md:w-auto px-8 py-3 bg-primary text-on-primary rounded-xl font-label-md font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button 
                        onClick={handleNext}
                        className="w-full md:w-auto px-8 py-3 bg-primary text-on-primary rounded-xl font-label-md font-bold flex items-center justify-center gap-2 hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 group"
                      >
                        {currentQuestionIdx < QUIZ_DATA.length - 1 ? 'Next Question' : 'View Results'}
                        <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-10 md:p-16 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <IconCheck size={48} className="text-primary" />
              </div>
              <h3 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface mb-2">Quiz Completed!</h3>
              <p className="font-body-md text-lg text-on-surface-variant mb-8">
                You scored {score} out of {QUIZ_DATA.length} ({Math.round((score / QUIZ_DATA.length) * 100)}%)
              </p>
              
              <button 
                onClick={resetQuiz}
                className="px-8 py-3 bg-primary text-on-primary rounded-xl font-label-md font-bold flex items-center gap-2 hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 group"
              >
                <IconRefresh size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
