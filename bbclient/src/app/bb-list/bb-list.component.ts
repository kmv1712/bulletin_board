import { Component, OnInit } from '@angular/core';

import { BbService } from '../bb.service';

//Компонент выводящий списокобъявлений


@Component({
  selector: 'app-bb-list',
  templateUrl: './bb-list.component.html',
  styleUrls: ['./bb-list.component.css']
})
export class BbListComponent implements OnInit {
  private bbs: Object[];

  constructor(private bbservice: BBService) { }

  ngOnInit() {
  	this.bbservice.getBbs().subscribe(
		(bbs: Object[]) => {this.bbs = bbs;}
	);
  }

}
