import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpmodal } from '../components/LevelUpModal';


interface Challenge {
    type: 'body' | 'eye' ;
    description: string ;
    amount: number ;
}

interface ChallangesContextData {
    level: number;
    currentExperience: number;
    challengeCompleted:number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: ( ) => void;
    startNewChallenge: ( ) => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}



interface ChallengeProviderProps{
    children:ReactNode;
    level:number,
    currentExperience:number ,
    challengeCompleted: number,
  }

export const ChallagensContext = createContext({} as ChallangesContextData )

export function ChallengeProvider({ children, ...rest }:ChallengeProviderProps){

    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted ?? 0);
    const [activeChallenge, setActiveChallenge ] = useState(null);
    
    const experienceToNextLevel = Math.pow((level + 1) *4, 2) 

    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    useEffect(() => {
        Notification.requestPermission()
    }, [])
  
    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengeCompleted', String(challengeCompleted))

    }, [level, currentExperience, challengeCompleted])




    function levelUp(){
     setLevel(level + 1);
     setIsLevelUpModalOpen(true)
    }

    function closeLevelUpModal(){
        setIsLevelUpModalOpen(false)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if(Notification.permission === "granted"){
            new Notification('Novo Desafio 🎉🙌😎',{
                body: `Valendo ${challenge.amount} xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }

        const {amount} = activeChallenge

        let finalExeperience = currentExperience + amount;

        if(finalExeperience >= experienceToNextLevel){
            finalExeperience = finalExeperience - experienceToNextLevel
            levelUp();
        }

        setCurrentExperience(finalExeperience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1);
    }

  
    return(
        <ChallagensContext.Provider 
        value={{
             level, 
             currentExperience, 
             challengeCompleted,  
             levelUp,
             startNewChallenge,
             activeChallenge,
             resetChallenge,
             experienceToNextLevel,
             completeChallenge,
             closeLevelUpModal,
             }} >
            {children}

            { isLevelUpModalOpen && <LevelUpmodal/>}

        </ChallagensContext.Provider>
    )
}