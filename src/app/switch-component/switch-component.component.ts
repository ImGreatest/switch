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
  id: string | null = null;

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

  @Input()
  iconChecked: string = this.options.icons.stateOn;

  @Input()
  iconUnChecked: string = this.options.icons.stateOff;

  @Input()
  appearanceTurnOn: string = this.options.appearances.checked;

  @Input()
  appearanceTurnOff: string = this.options.appearances.unchecked;

  constructor(
    @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
    @Inject(SWITCH_DEFAULT_OPTIONS)
    readonly options: SwitchOptions
  ) {}

  get iconOn(): string {
    return 'assets/' + this.iconChecked + '.svg';
  }

  get iconOff(): string {
    return 'assets/' + this.iconUnChecked + '.svg';
  }

  get appearances() {
    return this.options.appearances;
  }

  get turnOnColor(): string {
    return this.appearanceTurnOn;
  }

  get turnOffColor(): string {
    return this.appearanceTurnOff;
  }

  get form(): string {
    return this.formType;
  }

  get sizeM(): boolean {
    return this.options.size === 'm'
  }

  onChecked(): void {
    this.value = !this.value;
  }
}
