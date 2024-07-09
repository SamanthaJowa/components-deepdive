import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})

export class ControlComponent implements AfterContentInit{
  private el = inject(ElementRef)

  label = input.required<string>()

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  ngAfterContentInit() {
    //..
  }

  control = contentChild<ElementRef<HTMLInputElement|HTMLTextAreaElement>>('input')

  constructor(){
    afterRender(() =>{
      console.log('afterRender')
    })

    afterNextRender(() => {
      console.log('afterNextRender')
    })
  }

  onClick(){
    console.log('Clicked!')
    console.log(this.el)
  console.log(this.control())
  }


}
