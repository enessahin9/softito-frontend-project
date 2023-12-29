import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  cards: Card[] = []
  constructor(private cardService: CardService) {
  }
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.cardService.getAll().subscribe(result => {
      this.cards = result
    })
  }

}
