import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Loading from './components/Loading';
import Auth from "./apps/auth"
import Organization from "./apps/organization"
import Volunteer from "./apps/volunteer"
import React, { useEffect, useState } from 'react';
import LocalStorage from './helpers/storage';

const Apps: any={
  "auth": <Auth key={"auth"}/>,
  "organization": <Organization key={"organization"}/>,
  "volunteer": <Volunteer key={"volunteer"}/>
}

setupIonicReact();

const App = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const [currentApp, setCurrentApp]= React.useState(<Auth/>)
  useEffect(()=>{
    // Gets Current app and stores
    const app = LocalStorage.getApp()
    console.log(app)
    setCurrentApp(Apps[app])
    window.document.title=`ConekDem`
    // An event listener that is invoked from one app to another
    // so as to switch apps
    document.addEventListener("changeApp", ()=>{
      const app= LocalStorage.getApp()
      setCurrentApp(Apps[app])
      location.assign('/')
    })

    return ()=>{
      document.removeEventListener('changeApp', ()=>{})
    }
  },[])
  return (
    <>
   
  
      {currentApp}
   
    </>
  );
}

export default App;
