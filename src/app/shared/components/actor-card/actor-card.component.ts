import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {ActorCast, ActorCrew} from "../../../core/interfaces/actor.interface";
import {MovieDetails} from "../../../core/interfaces/movie.interface";

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent {
  @Input('data') public data: ActorCast | ActorCrew
  @ViewChild('img', {static: false}) private imgElement: ElementRef;
  private readonly imgNotFound: string = 'https://www.pngrepo.com/download/238977/404-error.png';

  constructor(private renderer: Renderer2) {
  }

  setDefaultPic() {
    this.renderer.setAttribute(this.imgElement.nativeElement, 'src', this.imgNotFound)
  }
}
