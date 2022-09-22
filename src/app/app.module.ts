import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { WorkspaceSettingPipeTemplateComponent } from './components/workspace-setting-pipe-template/workspace-setting-pipe-template.component';
import { BackendNamedTemplatesComponent } from './components/backend-named-templates/backend-named-templates.component';

@NgModule({
  declarations: [AppComponent, WorkspaceSettingPipeTemplateComponent, BackendNamedTemplatesComponent],
  imports: [
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
