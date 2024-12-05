import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-image-optimization',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './image-optimization.component.html',
  styleUrl: './image-optimization.component.scss'
})
export class ImageOptimizationComponent {

}
