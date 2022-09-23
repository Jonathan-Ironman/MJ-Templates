import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-workspace-setting-pipe-template',
  templateUrl: './workspace-setting-pipe-template.component.html',
  styleUrls: ['./workspace-setting-pipe-template.component.scss'],
})
export class WorkspaceSettingPipeTemplateComponent implements OnInit {
  title = 'Single workspace setting pipe template';

  defaultInput = '|vase|escher|2:3|3|';
  defaultTemplate = '_ by _ --ar _ --v _';

  templateVarsRegex = /\|(.*)\|/;
  templateVarsSplitChar = '|';
  templateVarPlaceholder = '_';

  reasoning = `Simple template syntax to use in combination with workspace settings.`;
  pros = [
    'Easy to implement',
    'Easy to type for user',
    'Pipe is easily accessible on mobile (?)',
    'Pipe has no meaning in human language (?)',
    'Pipe has no meaning in bot language (?)',
    'Single char to remember for users',
    'Plays nice with pre- and postfixes',
  ];
  cons = ['Only allows one template in input'];

  input = new FormControl(this.defaultInput, {
    nonNullable: true,
  });
  template = new FormControl(this.defaultTemplate, { nonNullable: true });
  output$!: Observable<string>;

  ngOnInit() {
    this.output$ = combineLatest([
      this.input.valueChanges.pipe(startWith(this.input.value)),
      this.template.valueChanges.pipe(startWith(this.template.value)),
    ]).pipe(
      map(([input, template]) => {
        // Check for template variables.
        const inputVars = input.match(this.templateVarsRegex);
        if (!inputVars) {
          return input;
        }

        // Extract the template values.
        const templateValues = inputVars[1].split(this.templateVarsSplitChar);
        if (templateValues.length === 0) {
          return input;
        }

        // Replace template placeholders with input var values.
        const filledTemplate = templateValues.reduce(
          (acc, value, index) =>
            acc.replace(this.templateVarPlaceholder, value),
          template
        );

        // Replace the template variables with the filled template.
        return input.replace(inputVars[0], filledTemplate);
      })
    );
  }
}
