export interface IElectricInfo{
  name?: string,
  numbersOfSubControllers: number,
  generalPower: number,
  mode: string,
  controllers: IController[]
}

export interface IController{
  name: string,
  power: number,
  status: string,
  numberOfElements: string
}
