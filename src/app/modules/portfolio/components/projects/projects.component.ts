import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projectsArray = signal<IProjects[]>([
    {
      src: 'img\\project.png',
      alt: '',
      title: 'título do projeto',
      width: '100px',
      height: '51px',
      description: 'descrição do projeto',
      links: [
        {
          name: 'Visite',
          href: 'link',
        },
      ],
    },
    {
      src: 'img\\project.png',
      alt: '',
      title: 'título do projeto',
      width: '100px',
      height: '51px',
      description: 'descrição do projeto',
      links: [
        {
          name: 'Visite',
          href: 'link',
        },
      ],
    },
    {
      src: 'img\\project.png',
      alt: '',
      title: 'título do projeto',
      width: '100px',
      height: '51px',
      description: 'descrição do projeto',
      links: [
        {
          name: 'Visite',
          href: 'link',
        },
      ],
    },
    {
      src: 'img\\project.png',
      alt: '',
      title: 'título do projeto',
      width: '100px',
      height: '51px',
      description: 'descrição do projeto',
      links: [
        {
          name: 'Visite',
          href: 'link',
        },
      ],
    },
  ]);
}
