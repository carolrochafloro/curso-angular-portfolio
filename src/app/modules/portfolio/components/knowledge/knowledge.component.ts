import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public knowledgeArray = signal<IKnowledge[]>([
    {
      src: 'icons\\javascript.svg',
      alt: 'ícone de conhecimento',
    },
    {
      src: 'icons\\css.svg',
      alt: 'ícone de conhecimento',
    },
    {
      src: 'icons\\angular.svg',
      alt: 'ícone de conhecimento',
    },
    {
      src: 'icons\\html.svg',
      alt: 'ícone de conhecimento',
    },
  ]);
}
