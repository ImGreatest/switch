import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { SizeL } from "../switch-component/const/size";
import { SWITCH_DEFAULT_OPTIONS, SwitchOptions } from "./switch-component.options";

@Component({
  selector: 'switch-component',
  templateUrl: './switch-component.template.html',
  styleUrl: './switch-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  host: { '[checked._checked]': 'value' },
})
export class SwitchComponent {
  @Input()
  id: string | null = '';

  @Input()
  singleColor: boolean = this.options.singleColor;

  @Input()
  showIcons: boolean = this.options.showIcons;

  @Input()
  @HostBinding('attr.data-size')
  size: SizeL = this.options.size;

  @Input()
  disabled: boolean | null = false;

  @Input()
  value: boolean | null = false;

  @Input()
  @HostBinding('attr.data-form_type')
  formType: string = this.options.formType;

  constructor(
    @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
    @Inject(SWITCH_DEFAULT_OPTIONS)
    readonly options: SwitchOptions
  ) {}

  get iconOn(): string {
    return this.options.icons.stateOn;
  }

  get iconOff(): string {
    return this.options.icons.stateOff;
  }

  get sizeM(): boolean {
    return this.options.size === 'm'
  }

  onChecked(): void {
    this.value = !this.value;
  }
}
