//componentes fixos, q são recalculados
import '../styles/global.css';
import {ChallengesProvider} from '../contexts/ChallengesContexts';
import { useState } from 'react';

//provider coloca o contexto em todo o app

function MyApp({ Component, pageProps }) {
    
  return (
  
  <Component {...pageProps} />
  
  )
}

export default MyApp
