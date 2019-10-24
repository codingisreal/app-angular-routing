import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { Login } from "./Components/Login/app.login.component";
import { Navbar } from "./Components/Navbar/app.navbar.component";
import { ServerList } from "./Components/ServerList/app.serverlist.component";
import { NewServer } from "./Components/NewServer/app.newserver.component";
import { ServerD } from "./Models/app.server.model";
import { User } from "./Models/app.user.model";
import { ServerHub } from "./Services/app.serverhub.service";
import { AppRoutes } from "./Services/app.routing.service";
import { AppLogin } from "./Services/app.login.service";

import bootstrap from "bootstrap";

@NgModule({
  declarations: [AppComponent, Login, Navbar, ServerList, NewServer],
  imports: [BrowserModule, FormsModule],
  providers: [ServerHub, ServerList, ServerD, User, AppRoutes, AppLogin],
  bootstrap: [AppComponent]
})
export class AppModule {}
