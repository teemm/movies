import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent {
  @Input() key: string;
  @Input() title: string;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  close(): void {
    this.closeModal.emit(false);
  }

}
