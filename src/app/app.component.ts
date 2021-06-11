import {Component, OnInit} from '@angular/core';
import {AuthService} from './Core/Services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'graphia';
  constructor(private service: AuthService){}

  ngOnInit(): void {
    this.service.GetData().valueChanges.subscribe(({data, loading}) => {
      console.log(data);
    });
  }
}
