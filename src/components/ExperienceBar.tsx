import { ChallagensContext } from '../contexts/ChallengeContext';
import { useContext } from 'react'
import styles from '../styles/components/ExperienceBar.module.css';

export function ExpirienceBar (){

    const { currentExperience, experienceToNextLevel } = useContext(ChallagensContext)

    const percentToLevel = Math.round(currentExperience * 100) / experienceToNextLevel
    return (
        <header  className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width:`${percentToLevel}%`}} />
                <span className={styles.currentExperience} style={{left:`${percentToLevel}%` }}> {currentExperience} xp </span>
                </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}