import { useContext } from 'react'
import { ChallagensContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile (){

    const {level } = useContext(ChallagensContext)

    return(
        <div className={styles.profileComponents} >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzE7OVr9aRgMJ09q0ZgySjg444-G72TUqDg&usqp=CAU" alt="Matheus Gorga"/>
            <div>
                <strong>Matheus Gorga</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}