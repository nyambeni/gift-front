import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  testing: any = [{ name: "Loy", text: "The very definition of cool is being calm, composed, under control, not excited, indifferent, and socially adept. Many times, cool people are those that don't get excited about things, that don't always have to talk, unless they have something cool to say." },
  { name: "Roy", text: "The very definition of cool is being calm, composed, under control, not excited, indifferent, and socially adept. Many times, cool people are those that don't get excited about things, that don't always have to talk, unless they have something cool to say." },
  { name: "Joy", text: "The very definition of cool is being calm, composed, under control, not excited, indifferent, and socially adept. Many times, cool people are those that don't get excited about things, that don't always have to talk, unless they have something cool to say." },]

  constructor() { }

  num: number = 0;
  num2: number = 1;
  tNum: number = 0;
  ngOnInit(): void {

    for (let t of this.testing) {
      this.tNum++;
    }
  }

  @ViewChild('page')
  htmlData!: ElementRef;


  public downloadPDF(): void {
    let DATA = document.getElementById('page')!;

    html2canvas(DATA).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('giftbox-report.pdf');
    });
  }

  /*
  //Next and previous 
  next() {
    this.num++;
    this.num2++

    if(this.num2 == this.tNum){

    }
  }

  prev() {
    this.num--;
    this.num2--;
  }*/

}

//For pdf
//npm install jspdf --save 