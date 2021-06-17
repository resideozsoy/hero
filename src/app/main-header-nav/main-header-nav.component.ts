import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog ,MatDialogRef} from '@angular/material/dialog';

import { map, shareReplay } from 'rxjs/operators';
import { LoginComponent } from '../user/login.component';
//import { LoginComponent } from '../user/login.component';

@Component({
  selector: 'app-main-header-nav',
  templateUrl: './main-header-nav.component.html',
  styleUrls: ['./main-header-nav.component.scss']
})
export class MainHeaderNavComponent {
  private dialogRef!: MatDialogRef<LoginComponent>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) { }

  onToggleSideNav() {
    console.log('onToggleSideNav');
    
  }

  openLoginDialog() {
    this.dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      height: '200px'
    });

  }

}


