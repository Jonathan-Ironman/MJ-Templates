import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-param-template',
  templateUrl: './param-template.component.html',
  styleUrls: ['./param-template.component.scss'],
})
export class ParamTemplateComponent implements OnInit {
  title = 'Param based templates';
  defaultInput =
    'Dutch still of |vase|giger|blue|. Product photography --ar 2:3 --template _ by _ with _ decorations';

  templateRegex = /--template\s+(.+)(?=\s--)/;
  templateVarsRegex = /\|(.*)\|/;
  templateVarsSplitChar = '|';
  templateVarPlaceholder = '_';

  reasoning = `This variation of template works pretty much already with "preferred options" and also works on Discord`;
  pros = ['Works on Discord', 'Little dev effort'];
  cons = [
    'Not as powerful as named templates',
    'Limited use-cases without "preferred option" usage',
  ];

  input = new FormControl(this.defaultInput, {
    nonNullable: true,
  });
  output$!: Observable<string>;

  ngOnInit() {
    this.output$ = combineLatest([
      this.input.valueChanges.pipe(startWith(this.input.value)),
    ]).pipe(
      map(([input]) => {
        // Check for template variables.
        const inputVars = input.match(this.templateVarsRegex);
        if (!inputVars) {
          return input;
        }

        // Check for template name.
        const template = input.match(this.templateRegex)?.[1];
        if (!template) {
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
        input = input.replace(this.templateRegex, '');

        // Replace the template variables with the filled template.
        return input.replace(inputVars[0], filledTemplate);
      })
    );
  }
}
