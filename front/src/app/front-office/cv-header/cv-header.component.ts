import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {of} from 'rxjs';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.css']
})
export class CvHeaderComponent implements OnInit {

  constructor() { }
  @Input() user: User;
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }

  ngOnInit(): void {
  }
  downloadResumePDF(firstName: string, lastName: string): void {
    const urlPdf = '../../../assets/CV_' + firstName + '_' + lastName+ '.pdf';
    const documentName = 'CV_' + firstName + '_' + lastName;
    FileSaver.saveAs(urlPdf, documentName);
  }

  getJsonUser() {
    return of({
      user: this.user
    });
  }

  downloadResumeJSON(firstName: string, lastName: string): void {
    this.getJsonUser().subscribe((res) =>
    this.dynamicDownloadByHtmlTag({
      fileName: 'CV_' + firstName + '_' + lastName + '.json',
      text: JSON.stringify(res, null, 4)
    }))
  }

  private dynamicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType}; charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    const event = new MouseEvent('click');
    element.dispatchEvent(event);
  }

}
