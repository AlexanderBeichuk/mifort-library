import { Component, OnInit } from '@angular/core';
import {EVENTS} from '../../models/mock';
import {Event} from '../../models/Event';

@Component({
  selector: 'app-event-board',
  templateUrl: './event-board.component.html',
  styleUrls: ['./event-board.component.scss']
})
export class EventBoardComponent implements OnInit {

  constructor() { }

  public allEvents: Event[] = EVENTS;

  ngOnInit() {
  }

}
