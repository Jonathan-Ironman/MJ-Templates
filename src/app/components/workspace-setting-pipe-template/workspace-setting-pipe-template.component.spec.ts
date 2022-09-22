import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceSettingPipeTemplateComponent } from './workspace-setting-pipe-template.component';

describe('WorkspaceSettingPipeTemplateComponent', () => {
  let component: WorkspaceSettingPipeTemplateComponent;
  let fixture: ComponentFixture<WorkspaceSettingPipeTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceSettingPipeTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceSettingPipeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
