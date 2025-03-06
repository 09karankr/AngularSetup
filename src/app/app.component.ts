import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  
  
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World';
  imgUrl = "D:\AngularSetup\src\assets\logo.jpeg";
  url = "https://www.bridgelabz.com";
  userName: string= "";

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz";
  }
  onClick($event:MouseEvent ){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
