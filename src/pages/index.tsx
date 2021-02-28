import Head from 'next/head'
import {GetServerSideProps} from 'next'
import styles from '../styles/Pages/Home.module.css'
import { CompletedChallenge } from '../components/CompletedChallenge'
import {ExpirienceBar} from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengeProvider } from '../contexts/ChallengeContext'

interface HomeProps{
  level: number,
  currentExperience:number,
  challengeCompleted: number ,
}


export default function Home(props:HomeProps) {


  return (

    <ChallengeProvider  level={props.level}  currentExperience={props.currentExperience} challengeCompleted={props.challengeCompleted} >
    <div className={styles.container} >
      <Head>
        <title>Inicio | move.it</title>
      </Head>
        <ExpirienceBar />

      <CountdownProvider>
        <section> 
          <div>
            <Profile/>
            <CompletedChallenge />
            <Countdown />
          </div>
          <div>
                <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
    </div>
    </ChallengeProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {level, currentExperience, challengeCompleted} = ctx.req.cookies;

  return{
    props: {
        level: Number(level), 
        currentExperience: Number(currentExperience) ,
        challengeCompleted: Number(challengeCompleted),
    }
  }
}

