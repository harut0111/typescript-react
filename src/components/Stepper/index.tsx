import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import {IStepProps} from './types'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        instructions: {
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1),
        },
        nextButton: {
            "&:hover": {
                 backgroundColor: '#4f0103'
            },
            backgroundColor: '#4f0103',
            marginRight: theme.spacing(1),
        },
        root: {
            margin: '0 auto',
            width: '90%',
        },
        stepper: {
            margin: '30px 30px 30px 55px',
        }
    }),
);

export default function CustomStepper({steps}: IStepProps) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(prevActiveStep => ++ prevActiveStep);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => -- prevActiveStep);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className='main'>
            <div className={classes.root} >
                <Stepper activeStep={activeStep} alternativeLabel={true} className={classes.stepper}>
                    {steps.map(step => (
                        <Step key={step.title}>
                            <StepLabel>{step.title}</StepLabel>
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
                            {steps[activeStep].component}
                            <div className='stepperButtons'>
   
                                <Button
                                    onClick={handleBack}
                                    className={classes.nextButton}
                                    variant="contained" 
                                    color="primary"
                                >
                                    {steps[activeStep].btnValus.left}
                                </Button>
                                
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={handleNext} 
                                    className={classes.nextButton}
                                    disabled={false}
                                >
                                    {steps[activeStep].btnValus.right}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
