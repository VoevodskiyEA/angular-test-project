import { Component, Input, EventEmitter, Output  } from '@angular/core';
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faDatabase
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()user;
  // tslint:disable-next-line:no-output-rename
  @Output('getUser') getUser: EventEmitter<any> = new EventEmitter();

  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;

  constructor() { }

  refresh() {
    this.getUser.emit();
  }

}
