import { ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { navbardData } from './sidenav-data';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  menuItems = navbardData

  constructor(private observer: BreakpointObserver,private cd:ChangeDetectorRef) {}

  submenuOpen: { [label: string]: boolean } = {};

  toggleSubMenu(menuItem: any) {
    const label = menuItem.label;
    this.submenuOpen[label] = !this.submenuOpen[label];
  }
  
  ngAfterViewInit() {
    this.sidenav.open()
    this.observer.observe(['(max-width:800px)']).subscribe((res: any) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cd.detectChanges();
  }

}
