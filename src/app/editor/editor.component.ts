import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/models/IArticle';

import {Router} from '@angular/router';
//import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  //Editor = BalloonEditor;
  Editor = ClassicEditor;
  editorConfig = {
    placeholder: 'Type the content here!',
    //extraPlugins: [ this.imagePluginFactory ],
  };

  article: IArticle;
  
  constructor(private router: Router  ) {
    this.article = {
      title: '',
      text: '',
    };
   }

  ngOnInit() {
  }

  onSubmit() {
  
  }
}
