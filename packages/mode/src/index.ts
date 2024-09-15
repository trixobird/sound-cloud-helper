export enum Environment {
  Production = 'prod',
  Local = 'local',
  Test = 'test',
}

export const isMode = (val: string): val is Environment => Object.values(Environment).includes(val as Environment);

export const NODE_ENV = !process.env.NODE_ENV || !isMode(process.env.NODE_ENV) ? Environment.Local : process.env.MODE;
