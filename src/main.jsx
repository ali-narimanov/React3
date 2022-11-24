import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Wine from './components/Wine'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Wine title="Иристое вино Le Grand Noir Brut Reserve Rose" description="Франция,розовое,0.75л" rating="3.6"  like={false}/>
    
    <p></p>
    <Wine title="Вкусное вино AzGranata" description="Азербайджан,розовое,1л" rating='3'  like={true}/>
  
  
  
  </>
)
