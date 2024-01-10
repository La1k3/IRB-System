import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "./auth.guard";
import {BronComponent} from "./bron/bron.component";
import {DodajZolnierzaComponent} from "./dodaj-zolnierza/dodaj-zolnierza.component";
import {ListaObecnosciComponent} from "./lista-obecnosci/lista-obecnosci.component";
import {RaportFrekfencjiComponent} from "./raport-frekfencji/raport-frekfencji.component";
import {SzkoleniaComponent} from "./szkolenia/szkolenia.component";
import {UmundorowanieComponent} from "./umundorowanie/umundorowanie.component";
import {WyprowiantowanieComponent} from "./wyprowiantowanie/wyprowiantowanie.component";
import {InstruktazComponent} from "./instruktaz/instruktaz.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { expectedRole: 'user' } },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'bron', component: BronComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'dodaj-zolnierza', component: DodajZolnierzaComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'lista-obecnosci', component: ListaObecnosciComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'raport-frekfencji', component: RaportFrekfencjiComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'szkolenia', component: SzkoleniaComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'umundorowanie', component: UmundorowanieComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'wyprowiantowanie', component: WyprowiantowanieComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: 'instruktaz', component: InstruktazComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
