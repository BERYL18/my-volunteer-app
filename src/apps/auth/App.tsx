import React from "react";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router";
import "..//../theme/variables.css";

import UserRole from "./pages/UserRole";
import SignIn from "./pages/SignIn";
import SignUpOrganization from "./pages/SignUpOrganization";
import SignUpVolunteer from "./pages/SignUpVolunteer";
import Info from "./pages/Info";
import ForgetPassword from "./pages/ForgetPassword";

const Auth: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            <Route path="/" component={UserRole} exact={true} />
            <Route path="/user-role" component={UserRole} exact={true} />
            <Route path="/sign-in" component={SignIn} exact={true} />
            <Route
              path="/sign-up-organization"
              component={SignUpOrganization}
              exact={true}
            />
            <Route
              path="/sign-up-volunteer"
              component={SignUpVolunteer}
              exact={true}
            />
            <Route path="/info" component={Info} exact={true} />
            <Route
              path="/forget-password"
              component={ForgetPassword}
              exact={true}
            />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default Auth;
