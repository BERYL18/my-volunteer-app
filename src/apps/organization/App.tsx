import React, { useEffect, useState } from "react";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router";
import Explore from "./pages/Explore";
import CreatPost from "./pages/CreatPost";
import Profile from "./pages/Profile";
import { add, person, planet, listCircleOutline } from "ionicons/icons";
import Applications from "./pages/Applications";
import Opportunity from "./pages/Opportunity";
import Loading from "../../components/Loading";

const Organization: React.FC = () => {
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
        <IonTabs >
          <IonRouterOutlet>
            <Switch>
            <Route path="/explore" component={Explore} exact />
            <Route path="/creatpost" component={CreatPost} exact />
            <Route path="/applications" component={Applications} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/opportunity" component={Opportunity} exact />
            <Redirect from="/" to="/explore" exact />
            </Switch>
          </IonRouterOutlet>


          <IonTabBar slot="bottom">
            <IonTabButton tab="explore" href="/explore">
              <IonIcon size="large" icon={planet} />
              <IonLabel>Explore</IonLabel>
            </IonTabButton>

            <IonTabButton tab="create" href="/creatpost">
              <IonIcon size="large" icon={add} />
              <IonLabel>Create</IonLabel>
            </IonTabButton>

            <IonTabButton tab="applications" href="/applications">
              <IonIcon size="large" icon={listCircleOutline} />
              <IonLabel>Applications</IonLabel>
            </IonTabButton>

            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={person} />
              <IonLabel>profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    )}
    </>

  );
};

export default Organization;
