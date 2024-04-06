import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appPlaceHolder]'
})
export class PlaceholderDirective {
  // ViewContainerRef gives a reference to a place where this directive is used
  constructor(public viewContainerRef: ViewContainerRef) {}
}