import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,HeaderComponent,SideNavComponent,CommonModule],
  template: `
    <app-header/>
    <div class="main-content">
    <router-outlet></router-outlet>
    </div>
    <app-side-nav/>
  `,
  styles: [`
    
.main-content {
  margin-top: 50px; /* Adjust to the height of your header */
  margin-left: 200px; /* Adjust to the width of your sidebar */
  padding: 20px;
  background-color: #f1f1f1;
  min-height: calc(100vh - 0px); /* Ensure it takes the full height minus the header */
}

`],
})
export class AppComponent {
  title = 'Solugenix Training Management';
}
