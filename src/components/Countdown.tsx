import { useState, useEffect, useContext } from 'react';
import { ChallagensContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Countdown.module.css';
import {CountdownContext} from '../contexts/CountdownContext'




export function Countdown (){

    const {minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown, } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2,'0').split('')  

  

    return(
        <div>
            <div  className={styles.CountdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>


            { hasFinished ?(
                <button  disabled
                        className={ styles.countDownButton} 
                    >
                        Ciclo Encerrado
                </button>
            ) : (
                <>
                    {
                        isActive? (
                            <button type="button" 
                                className={ `${styles.countDownButton} ${styles.countDownButtonActive} `} 
                                onClick={resetCountdown}>
                                Abandonar Ciclo <img className={styles.buttonImg}  src="icons/pause.svg" />
                            </button>
                        ) : (
                            <button type="button" 
                                className={styles.countDownButton} 
                                onClick={startCountdown}>
                                Iniciar um Ciclo <img className={styles.buttonImg}  src="icons/play.svg" />
                            </button>
                        )
                    }
                </>
            )}

            
        </div>
    )
}