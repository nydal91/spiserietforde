
import { NgModule }     from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }      from './about/about.component';
import { PicComponent }      from './pic/pic.component';
import { MenuComponent }      from './menu/menu.component';


import { BarnComponent } from './barn/barn.component';
import { ForComponent } from './for/for.component';

import { SalatarComponent } from './salatar/salatar.component';
import { SmaretterComponent } from './smaretter/smaretter.component';
import { PasmurtComponent } from './pasmurt/pasmurt.component';
import { PaleggComponent } from './palegg/palegg.component';
import { BurgermenyComponent } from './burgermeny/burgermeny.component';
import { KakerComponent } from './kaker/kaker.component';
import { DrikkeComponent } from './drikke/drikke.component';
import { KaffiComponent } from './kaffi/kaffi.component';
import { VarmeComponent } from './varme/varme.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
	{
		    path: '',
		        redirectTo: '/hello',
			    pathMatch: 'full'
			      },
			        {
					    path: 'hello',
					        component: PicComponent
						  },
		
								        {
										    path: 'menu',
										        component: MenuComponent,
														
				
											  },
												  { path: 'påsmurt', component: PasmurtComponent },
													{ path: 'småretter', component: SmaretterComponent },
													 { path: 'barnemeny', component: BarnComponent },
													  { path: 'suppe', component: ForComponent },
														 { path: 'salatar', component: SalatarComponent },
														  { path: 'pålegg', component: PaleggComponent },
															 { path: 'burgermeny', component: BurgermenyComponent },
															  { path: 'kakermeny', component: KakerComponent },
																 { path: 'drikkemeny', component: DrikkeComponent },
																  { path: 'kaffimeny', component: KaffiComponent },
																	 { path: 'varmerettar', component: VarmeComponent },

	  {
		      path: 'about',
		          component: AboutComponent
			    }
  ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

