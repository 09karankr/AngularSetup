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
  nameError: string = "";

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz";
  }
  onClick($event:MouseEvent ){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  onInput($event: Event){
    console.log("Change Event Occured!",($event.target as HTMLInputElement).value);
    const nameRagex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRagex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}
