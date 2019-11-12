import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import CargoInfo from '../Stepper/CargoInfo';
import ContactInfo from '../Stepper/ContactInfo';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1),
        },
        nextButton: {
            "&:hover": {
                 backgroundColor: '#4f0103'
            },
            backgroundColor: '#4f0103',
        },
        root: {
            width: '90%',
        }
    }),
);

function getSteps() {
    return ['Контактная информация', 'Информация о грузе', 'Отправка'];
}


function getStepContent(stepIndex: number){
    switch (stepIndex) {
        case 0:
            return <ContactInfo />
        case 1:
            return <CargoInfo />;
        case 2:
            return <div className='header'>Отправка</div>;
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className='main'>
            <div className={classes.root} >
                <Stepper activeStep={activeStep} alternativeLabel={true}>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div className='main-completed'>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div className='mainContent'>
                            {getStepContent(activeStep)}
                            <div className='stepperButtons'>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext} className={classes.nextButton}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
