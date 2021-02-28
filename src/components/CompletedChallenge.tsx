import { useContext } from 'react'
import { ChallagensContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CompletedChallenge.module.css'

export function CompletedChallenge (){

    const { challengeCompleted } = useContext(ChallagensContext)
    return(
        <div className={styles.completedChallengeContainer}>
            <span>Desafios Completos</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}