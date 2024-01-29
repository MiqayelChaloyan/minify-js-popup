import { useState } from 'react';

import { Modal } from './components/Modal';
import { Button } from './ui/Button';

import { useMultistepForm } from './hooks/useMultistepForm';

import { Page1 } from './screens/Page1';
import { Page2 } from './screens/Page2';
import { Page3 } from './screens/Page3';

function App() {
  const [open, isOpen] = useState(false);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Page1 />,
      <Page2 />,
      <Page3 />
    ])

  const handleSubmit = () => isOpen(true);
  const handleClose = () => isOpen(false);

  return (
    <div>
      <div>
        <Button onClick={handleSubmit}
          text='Find my best size'
          style={{
            backgroundColor: 'rgb(139 156 177)',
            border: '1px solid rgb(229, 229, 229)',
            cursor: 'pointer',
            padding: '0.75rem',
            color: 'rgb(26, 26, 26)',
            lineHeight: 1.25,
          }}
          fontSize='25px'
        />
      </div>
      <Modal open={open} handleClose={handleClose}>
        <div style={{
          marginLeft: 'auto',
          marginRight: 7,
          color: 'white'
        }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={{
          marginTop: "1rem",
          display: "flex",
          gap: ".5rem",
          justifyContent: "flex-end",   
          position: 'fixed',
          bottom: '12px',
          right: '11px',
        }}>
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              style={{
                width: '100px',
                height: '50px',
                fontSize: '17px',
                background: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer'
              }}
            >
              Back
            </button>
          )}
          <button
            onClick={next}
            type="submit"
            style={{
              width: '100px',
              height: '50px',
              fontSize: '17px',
              background: 'white',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
