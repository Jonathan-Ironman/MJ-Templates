import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-workspace-setting-pipe-template',
  templateUrl: './workspace-setting-pipe-template.component.html',
  styleUrls: ['./workspace-setting-pipe-template.component.scss'],
})
export class WorkspaceSettingPipeTemplateComponent implements OnInit {
  input = new FormControl('');
  template = new FormControl('_ by _');
  output = '';

  ngOnInit(): void {}
}
