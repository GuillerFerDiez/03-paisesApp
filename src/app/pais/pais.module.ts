import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisImputComponent } from './components/pais-imput/pais-imput.component';
import { HttpClientModule } from '@angular/common/http';
import { PorSubregionComponent } from './pages/por-subregion/por-subregion.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisImputComponent,
    PorSubregionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    PorSubregionComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }