import { Directive,ElementRef,Renderer,OnInit } from '@angular/core';

@Directive({
  selector: '[appClassSelector]'
})
export class ClassSelectorDirective implements OnInit {

  constructor(private renderer:Renderer,private _elementRef: ElementRef) { }
  ngOnInit(){
  this.addClass("col-md-11");
  }
 addClass(className: string) {
      
        this.renderer.setElementClass(this._elementRef.nativeElement, className, true);
   }

   removeClass(className: string, element: any) {
       this.renderer.setElementClass(this._elementRef.nativeElement, className, false);
   }
}
