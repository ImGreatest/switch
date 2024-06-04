import { SizeL, FormM3 } from "./const";

export interface SwitchOptions {
  readonly appearances: Readonly<{
    checked: string,
    unchecked: string,
  }>,
  readonly icons: Readonly<{
    stateOff: string,
    stateOn: string,
  }>,
  readonly showIcons: boolean;
  readonly size: SizeL;
  readonly formType: FormM3;
}

export const SWITCH_DEFAULT_OPTIONS: SwitchOptions = {
  appearances: {
    checked: '#2196F3',
    unchecked: '#ccc',
  },
  icons: {
    stateOff: 'toggleOff',
    stateOn: 'toggleOn',
  },
  showIcons: false,
  size: 'm',
  formType: 'm3',
}
