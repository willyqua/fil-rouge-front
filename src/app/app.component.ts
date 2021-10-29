import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fil-rouge-front';
  public users: {
    id: Number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
  }[] = [];
  constructor() {
    axios
      .get('https://run.mocky.io/v3/90e34936-0f07-49b1-9539-737f2269d151')
      .then((response) => {
        this.users = response.data;
        console.log(response.data);
      });
  }
}
