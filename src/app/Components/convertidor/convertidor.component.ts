import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {

cantidad = 0;
monedaOriginal = "USD";
MonedaDestino = "EUR";
total = 0;

listaMonedas: string[] = ["USD", "EUR", "GTQ"];

realizarConversion() {
    
  switch (this.monedaOriginal) {
    case 'USD':
      if (this.MonedaDestino === 'EUR') {
        this.total = this.cantidad * 0.92;
      }

      if (this.MonedaDestino == 'USD') {
        this.total = this.cantidad;
      }

      if (this.MonedaDestino == 'GTQ') {
        this.total = this.cantidad * 7.88;
      }

      break;
    
    case 'EUR':
      if (this.MonedaDestino === 'EUR') {
        this.total = this.cantidad;
      }
      if (this.MonedaDestino == 'USD') {
        this.total = this.cantidad * 1.08;
      }

      if (this.MonedaDestino == 'GTQ') {
        this.total = this.cantidad * 8.55;
      }

      break;

      case 'GTQ':
      if (this.MonedaDestino === 'EUR') {
        this.total = this.cantidad * 0.12;
      }
      if (this.MonedaDestino == 'USD') {
        this.total = this.cantidad * 0.13;
      }

      if (this.MonedaDestino == 'GTQ') {
        this.total = this.cantidad;
      }
      break;
    }

  }
 }
