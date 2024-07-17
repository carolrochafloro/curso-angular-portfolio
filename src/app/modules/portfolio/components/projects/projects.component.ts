import { Component, inject, signal } from '@angular/core';

import { IProjects } from '../../interface/projects.interface';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { EDialogPanelClass } from '../../enum/e-dialog-panel-class.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public projectsArray = signal<IProjects[]>([
    {
      src: 'img\\project.png',
      alt: '',
      title: 'Título do projeto',
      width: '100px',
      height: '51px',
      description:
        'Aqui uma descrição mais completa do projeto, com objetivo, arquitetura e tecnologias utilizadas.',
      links: [
        {
          name: 'Visite',
          href: 'link',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
