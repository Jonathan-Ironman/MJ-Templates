import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, debounceTime, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-backend-named-templates',
  templateUrl: './backend-named-templates.component.html',
  styleUrls: ['./backend-named-templates.component.scss'],
})
export class BackendNamedTemplatesComponent implements OnInit {
  title = 'Named backend templates';
  defaultInput = 'prefix, |darkside| --t cookies';

  namedTemplates = [
    {
      name: 'vase',
      template: 'vase by _',
    },
    {
      name: 'cookies',
      template: '_ has cookies',
    },
  ];

  templateNameRegex = /--t\s+([a-z]+)/;
  templateVarsRegex = /\|(.*)\|/;
  templateVarsSplitChar = '|';
  templateVarPlaceholder = '_';

  reasoning = `Backend templates. Work without fancy custom text inputs`;
  pros = ['Works on Discord', 'Allows for multiple templates'];
  cons = [
    'Needs BE command for storing templates',
    'Easy user errors, no FE validation',
  ];

  input = new FormControl(this.defaultInput, {
    nonNullable: true,
  });
  // template = new FormControl(this.defaultTemplate, { nonNullable: true });
  output$!: Observable<string>;

  ngOnInit() {
    this.output$ = combineLatest([
      this.input.valueChanges.pipe(startWith(this.input.value)),
    ]).pipe(
      debounceTime(2000),
      map(([input]) => {
        // Check for template variables.
        const inputVars = input.match(this.templateVarsRegex);
        if (!inputVars) {
          return input;
        }

        // Check for template name.
        const templateName = input.match(this.templateNameRegex)?.[1];
        if (!templateName) {
          return input;
        }

        // Check for template.
        const template = this.namedTemplates.find(
          (t) => t.name === templateName
        )?.template;
        if (!template) {
          alert(`Template ${templateName} not found.`);
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

        // Remove --t and template name from input.
        input = input.replace(this.templateNameRegex, '');

        // Replace the template variables with the filled template.
        return input.replace(inputVars[0], filledTemplate);
      })
    );
  }
}
