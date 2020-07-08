import { Injectable } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';
import { CompanyModel } from 'models/entities/company-model';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }


  public captureScreen(dataToConvert, imgWidth, orientation): Promise<any> {
    return new Promise((resolve, reject) => {
      html2canvas(dataToConvert).then(canvas => {
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png')
        const pdf = new jspdf(orientation, 'mm', 'a4'); // A4 size page of PDF
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('MYPdf.pdf'); // Generated PDF
        resolve();
      });
    })
  }

  /**
   * Método que genera un documento tipo pdf
   * @param header es un arreglo que contiene los nombres de las cabezeras de la tabla
   * @param rows son los datos que contiene la tabla
   * @param logo es el logo que está en formato base64
   * @param company nombre de la empresa se inserta en el documentos pdf al lado de la imagen
   * @param reportName nombre del reporte
   *
   *  ayuda: http://raw.githack.com/MrRio/jsPDF/master/docs/index.html
   *        https://www.npmjs.com/package/jspdf-autotable/v/2.0.9
   *        https://parall.ax/products/jspdf/doc/symbols/jspdf.html
   */
  public generatePdf(header: any[], rows: any[], logo: string, company: CompanyModel, reportName: string ) {
    const doc = new jspdf('l', 'pt');
    // doc.text(230, 50, company.name ); 
    // doc.text(230, 75, company.phone ); 
    // doc.text(230, 100, company.address );
    // doc.text(230, 125, company.email );
    //   base64, formato, X, Y, width, heigth
    doc.addImage(logo, 'JPG', 35, 20, 180, 160);
    doc.autoTable(header, rows, {startY: 180});
    doc.save( reportName + ' ' + company.name );
  }
}
