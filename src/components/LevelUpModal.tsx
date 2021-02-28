import { useContext } from 'react'
import { ChallagensContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpmodal() {

    const  {level, closeLevelUpModal } = useContext(ChallagensContext)

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você acalnçou um novo level</p>

                <button type='button' onClick={closeLevelUpModal} >
                    <img src="/icons/close.svg" alt=""/>
                </button>
             </div>
        </div>
    )
}