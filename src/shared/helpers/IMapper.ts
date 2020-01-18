export default interface IMapper {
  getResult: () => void;
  parseData: (data: any) => void;
}
