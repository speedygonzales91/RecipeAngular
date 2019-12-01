import {HostBinding, HostListener, Directive } from  '@angular/core';

@Directive({
  selector : '[appDropDown]'
})
export class Dropdown {
 @HostBinding('class.open') isOpen = false;

 @HostListener('click') toggleOpen() {
   this.isOpen = !this.isOpen;
 }
}