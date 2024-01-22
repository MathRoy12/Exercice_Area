import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {NgForOf} from "@angular/common";
import {Chats} from "./Chats";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'ng';
  chats:Chats[] = [];
  constructor(public http:HttpClient) {
  }

  async ngOnInit(){
    let res = await lastValueFrom(this.http.get<Chats[]>("https://localhost:7108/api/Chats"))
    this.chats = res
    console.log(this.chats)
  }
}
