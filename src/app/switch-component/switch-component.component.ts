import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { SizeL } from "./const";
import { SWITCH_DEFAULT_OPTIONS, SwitchOptions } from "./switch-component.options";

@Component({
  selector: 'switch',
  templateUrl: './switch-component.template.html',
  styleUrl: './switch-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  host: { '[checked._checked]': 'value' },
})
export class SwitchComponent {
  @Input()
  public id: string | null = null;

  @Input()
  public showIcons: boolean = this.options.showIcons;

  @Input()
  @HostBinding('attr.data-size')
  public size: SizeL = this.options.size;

  @Input()
  public disabled: boolean | null = false;

  @Input()
  public value: boolean | null = false;

  @Input()
  @HostBinding('attr.data-form_type')
  public formType: string = this.options.formType;

  @Input()
  public iconChecked: string = this.options.icons.stateOn;

  @Input()
  public iconUnChecked: string = this.options.icons.stateOff;

  @Input()
  public appearanceTurnOn: string = this.options.appearances.checked;

  @Input()
  public appearanceTurnOff: string = this.options.appearances.unchecked;

  constructor(
    @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
    @Inject(SWITCH_DEFAULT_OPTIONS)
    readonly options: SwitchOptions
  ) {}

  protected get _iconOn(): string {
    return 'assets/' + this.iconChecked + '.svg';
  }

  protected get _iconOff(): string {
    return 'assets/' + this.iconUnChecked + '.svg';
  }

  protected get _appearances() {
    return this.options.appearances;
  }

  protected get _turnOnColor(): string {
    return this.appearanceTurnOn;
  }

  protected get _turnOffColor(): string {
    return this.appearanceTurnOff;
  }

  protected get _form(): string {
    return this.formType;
  }

  protected get _sizeM(): boolean {
    return this.options.size === 'm'
  }

  protected onChecked(): void {
    this.value = !this.value;
  }
}
