import React, { useEffect, useState } from "react";
import {
  IonIcon,
  IonAlert,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import ExploreVoln from "./pages/ExploreVoln";
import ApplyNow from "./pages/ApplyNow";
import AppHistory from "./pages/AppHistory";
import ProfileVoln from "./pages/ProfileVoln";
import { person, planet, checkmarkCircleOutline } from "ionicons/icons";
import Loading from "../../components/Loading";
const Volunteer: React.FC = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <>

{isLoading? (
      <Loading />
    ) : (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route path="/explore-volunteer" component={ExploreVoln} exact />
            <Route path="/app-status" component={AppHistory} exact />
            <Route path="/profile-volunteer" component={ProfileVoln} exact />
            <Route path="/apply_now" component={ApplyNow} exact />
            <Redirect from="/" to="/explore-volunteer" exact />
          </Switch>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="explore-volunteer" href="/explore-volunteer">
            <IonIcon size="large" icon={planet} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>

          <IonTabButton tab="app-status" href="/app-status">
            <IonIcon size="large" icon={checkmarkCircleOutline} />
            <IonLabel>Application Status</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile-volunteer" href="/profile-volunteer">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    )}
    </>
  );
};

export default Volunteer;