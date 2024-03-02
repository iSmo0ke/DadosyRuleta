import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'jac-app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})

export class RuletaComponent {
  @ViewChild('canvas') canvasRef!: ElementRef;
  @ViewChild('idestado') idestadoRef!: ElementRef;
  clic: number = 0;
  movement: any;

  sortear() {
    let canvas = this.canvasRef.nativeElement;
    let context = canvas.getContext("2d");
    let center = canvas.width / 2;

    context.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    context.beginPath();
    context.moveTo(center, center);
    context.arc(center, center, center, 0, 2 * Math.PI);
    context.lineTo(center, center);
    context.fillStyle = '#33333333';
    context.fill();

    context.beginPath();
    context.moveTo(center, center);
    context.arc(center, center, center - 10, 0, 2 * Math.PI);
    context.lineTo(center, center);
    context.fillStyle = 'black';
    context.fill();

    const array_concursantes = [
      'Sin premio',
      'Casa',
      'Xbox Series X',
      'PlayStation 6',
      'PC Gamer',
      'Kit Perifericos Gamer',
      'Silla Gamer',
      'Monitor Gamer',
      'Sin premio',
      'Viaje',
      'Concierto a elección',
      'Samsung s24 Ultra',
      'iPhone 15 Pro Max',
      'Sin premio',
      'Jet Privado',
      'Suzuki Hayabusa',
      'Sin premio',
      'Carro',
      '1 Millon de Pesos',
      'Sin premio',
      '1TB Almacenamiento en la nube',
      'Colección de Sneakers'
    ];

    for (var i = 0; i < array_concursantes.length; i++) {
      context.beginPath();
      context.moveTo(center, center);
      context.arc(center, center, center - 20, i * 2 * Math.PI / array_concursantes.length, (i + 1) * 2 * Math.PI / array_concursantes.length);
      context.lineTo(center, center);
      context.fillStyle = this.random_color();
      context.fill();

      context.save();
      context.translate(center, center);
      context.rotate(3 * 2 * Math.PI / (5 * array_concursantes.length) + i * 2 * Math.PI / array_concursantes.length);
      context.translate(-center, -center);
      context.font = "13px Comic Sans MS";
      context.textAlign = "right";
      context.fillStyle = "white";
      context.fillText(array_concursantes[i], canvas.width - 30, center);
      context.restore();
    }

    let pos_ini = 0;
    if (this.clic === 0) {
      this.movement = setInterval(() => {
        pos_ini += 10;
        canvas.style.transform = 'rotate(' + pos_ini + 'deg)';
      }, 10);
      this.clic = 1;
      this.idestadoRef.nativeElement.innerHTML = "Detener";
    } else {
      clearInterval(this.movement); // Limpiar el intervalo anterior
      this.clic = 0;
      this.idestadoRef.nativeElement.innerHTML = "Sortear";
    }
  }

  random_color() {
    let ar_digit = ['2', '3', '4', '5', '6', '7', '8', '9'];
    let color = '';
    let i = 0;
    while (i < 6) {
      let pos = Math.round(Math.random() * (ar_digit.length - 1));
      color = color + '' + ar_digit[pos];
      i++;
    }
    return '#' + color;
  }
}