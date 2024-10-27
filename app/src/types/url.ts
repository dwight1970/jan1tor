export enum ParamType {
  STRING = 'string',
  REGEX = 'regex',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
}

export type Param = {
  key: string;
  value?: string | RegExp;
  type?: ParamType;
  origin?: string;
};



