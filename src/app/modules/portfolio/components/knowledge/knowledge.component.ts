import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/Knowledge.interface';

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
      src: 'end. icon 1',
      alt: 'ícone de conhecimento',
    },
    {
      src: 'end. icon 1',
      alt: 'ícone de conhecimento',
    },
    {
      src: 'end. icon 1',
      alt: 'ícone de conhecimento',
    },
    {
      src: 'end. icon 1',
      alt: 'ícone de conhecimento',
    },
  ]);
}
