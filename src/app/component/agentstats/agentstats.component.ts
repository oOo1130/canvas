import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agentstats',
  templateUrl: './agentstats.component.html',
  styleUrls: ['./agentstats.component.css']
})
export class AgentstatsComponent implements OnInit {
  agents : any = [];
  actionbars : any = [];
  constructor() { 
    this.agents =[
      {
        author_img:"001-boy",
        name:"Brad Simsons",
        skill:"HTML, JS, ReactJS",
        company:"Intertico",
        job:"Web, UI/UX Design",
        progress:"65",
        barcolor:"color1"
      },
      {
        author_img:"018-girl-9",
        name:"Jessie Clarcson",
        skill:"C#, ASP.NET, MS SQL",
        company:"Agoda",
        job:"Houses & Hotels",
        progress:"83",
        barcolor:"color2"
      },
      {
        author_img:"047-girl-25",
        name:"Labron Wayde",
        skill:"PHP, Laravel, VueJS",
        company:"RoadGee",
        job:"Transportation ",
        progress:"47",
        barcolor:"color3"
      },
      {
        author_img:"014-girl-7",
        name:"Natali Trump",
        skill:"Python, PostgreSQL, ReactJS",
        company:"The Hill",
        job:"Insurance",
        progress:"71",
        barcolor:"color4"
      }
    ]
    this.actionbars = [
      {
        name:"fas fa-toggle-on"
      },
      {
        name:"faa fa-cog"
      },
      {
        name:"fas fa-trash-alt"
      }
    ]
  }

  ngOnInit(): void {
  }

}
