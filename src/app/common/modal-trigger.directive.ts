import { Directive, Inject, OnInit, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';
@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
@Input('modal-trigger') modalId: string; 

private elButton: HTMLElement;

    constructor(el: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.elButton = el.nativeElement;
    }

    ngOnInit() {
        this.elButton.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({})
         });
    }
}