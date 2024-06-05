import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { SizeL } from "../lib/const/index";
import { SwitchOptions, SWITCH_DEFAULT_OPTIONS } from  "./test-switch-lib.options";

@Component({
  selector: 'lib-test-switch-lib',
  templateUrl: './test-switch-lib.template.html',
  styleUrls: ['./test-switch-lib.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  host: { '[checked._checked]': 'value' },
})
export class TestSwitchLibComponent {
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

  public get _iconOn(): string {
    return 'assets/' + this.iconChecked + '.svg';
  }

  public get _iconOff(): string {
    return 'assets/' + this.iconUnChecked + '.svg';
  }

  public get _appearances() {
    return this.options.appearances;
  }

  public get _turnOnColor(): string {
    return this.appearanceTurnOn;
  }

  public get _turnOffColor(): string {
    return this.appearanceTurnOff;
  }

  public get _form(): string {
    return this.formType;
  }

  public get _sizeM(): boolean {
    return this.options.size === 'm'
  }

  onChecked(): void {
    this.value = !this.value;
  }
}
