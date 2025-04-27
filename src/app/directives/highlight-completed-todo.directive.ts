import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input<boolean>(false)

  el = inject(ElementRef);
  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
    } else {
      this.el.nativeElement.style.backgroundColor = 'white';
    }
  });
} 
