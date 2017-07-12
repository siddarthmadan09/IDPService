import { Directive,ElementRef,OnInit,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective implements OnInit {
@HostBinding('class.flipped') leftBarClass = false;
@HostBinding('style.backgroundColor') back : String;
  constructor(private elRef:ElementRef) { }

ngOnInit(){
	//this.elementRef.nativeElement.style.backgroundColor='blue';
	//this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
}
@HostListener('mouseover') mouseover(event:Event){
	//this.back='blue';
	this.leftBarClass = true;
}
@HostListener('mouseleave') mouseleave(event:Event){
	//this.back='green';
	this.leftBarClass =false;
}
}
