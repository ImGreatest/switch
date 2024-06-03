import { ToggleOff, ToggleOn, ToggleOffLarge, ToggleOnLarge, SizeL, FormM3 } from "./const";

export interface SwitchOptions {
  readonly icons: Readonly<{
    stateOff: string,
    stateOn: string,
  }>,
  readonly singleColor: boolean;
  readonly showIcons: boolean;
  readonly size: SizeL;
  readonly formType: FormM3;
}

export const SWITCH_DEFAULT_OPTIONS: SwitchOptions = {
  icons: {
    stateOff: ToggleOff,
    stateOn: ToggleOn,
  },
  singleColor: false,
  showIcons: false,
  size: 'm',
  formType: 'm3',
}
