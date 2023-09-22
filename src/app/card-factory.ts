import {Card} from "./card";

export class CardFactory {

  private static suits: string[] = [
    'Spades', 'Hearts', 'Diamonds', 'Clubs'];

  private static faces: string[] = [
    'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Jack', 'Queen', 'King'
  ]

  get randomCard(): Card {
    const rand: number = Math.floor(52 * Math.random())
    return CardFactory.makeCard(rand);
  }

  private static makeCard(index: number): Card {
    const card: Card = new Card()
    card.number = index + 1;
    card.face = this.faces[index % 13];
    card.suit = this.suits[Math.floor(index / 13)]
    card.name = `${card.face} of ${card.suit}`
    return card;
  }
}
