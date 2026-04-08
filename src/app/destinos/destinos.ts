import { Component } from '@angular/core';

@Component({
  selector: 'app-destinos',
  imports: [],
  templateUrl: './destinos.html',
  styleUrl: './destinos.css',
})
export class Destinos {

  emalta = [
    {imagem: "image.png", localidade: "Paris", tour: "100+ Tours"},
    {imagem: "image (1).png", localidade: "Singapore", tour: "300+ Tours"},
    {imagem: "image (2).png", localidade: "Roma", tour: "400+ Tours"},
    {imagem: "image (3).png", localidade: "Bangkok", tour: "100+ Tours"},
    {imagem: "image (4).png", localidade: "Bali", tour: "600+ Tours"},
    {imagem: "image (5).png", localidade: "Phuket", tour: "200+ Tours"},
    {imagem: "image (6).png", localidade: "Tokyo", tour: "700+ Tours"},
    {imagem: "image (7).png", localidade: "Cappadocia", tour: "900+ Tours"},
  ]
}
