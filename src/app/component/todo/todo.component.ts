import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  agents : any = [];
  actionbars : any = [];
  constructor() { 
    this.agents =[
      {
        job:"Create FireStone Logo",
        timeline:"2",
        bulletbar:"color1",
        checkcolor:"checkcolor1"
      },
      {
        job:"Shakeholder Meeting",
        timeline:"3",
        bulletbar:"color2",
        checkcolor:"checkcolor2"
      },
      {
        job:"Scoping & Estimations",
        timeline:"5",
        bulletbar:"color3",
        checkcolor:"checkcolor3"
      },
      {
        job:"Sprint Showcase",
        timeline:"1",
        bulletbar:"color4",
        checkcolor:"checkcolor4"
      },
      {
        job:"Project Retro",
        timeline:"12",
        bulletbar:"color5",
        checkcolor:"checkcolor5"
      }
    ]
  }
  @HostListener('document:click', ['$event'])
  ngOnInit(): void {
  }

   myFunction() {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  onDocumentClick(event: any) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}