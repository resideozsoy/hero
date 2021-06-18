import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { map, shareReplay } from 'rxjs/operators';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private dialogRef!: MatDialogRef<VideoPlayerComponent>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openWatchVideoDialog() {
    this.dialogRef = this.dialog.open(VideoPlayerComponent, {
      width: '250px',
      height: '200px'
    });
  }
}
