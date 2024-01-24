import {Component} from '@angular/core';
import {CardFactory} from "./card-factory";
import {Card} from "./card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private cardFactory: CardFactory = new CardFactory();
  card: Card = this.cardFactory.randomCard
  imgSrc: string = AppComponent.cardImageSrc(this.card.number);

  private static cardImageSrc(num: number): string {
    return `assets/images/cards/${num}.png`
  }

  next(): void {
    this.card = this.cardFactory.randomCard
    this.imgSrc = AppComponent.cardImageSrc(this.card.number);
  }
}
