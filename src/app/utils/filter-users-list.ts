import { IUser } from "../interfaces/user/user.interface";
import { isWithinInterval } from 'date-fns';
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUserListByName = (name: string, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
      return usersList;
    }
    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()))
    return filteredList;
  }

  const filterUserListBystatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
      return usersList;
    }
    const filteredList = usersList.filter((user) => user.ativo === status);
    return filteredList;
  }

  const filterUserListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATE_NOT_SELECTED = startDate === undefined ||  endDate === undefined;

    if(DATE_NOT_SELECTED) {
      return usersList;
    }
    const ListFiltered = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate
    }));
    return ListFiltered;
  }

 const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];
    filteredList = filterUserListByName(filterOptions.name, usersList);
    filteredList = filterUserListBystatus(filterOptions.status, filteredList);
    filteredList = filterUserListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
    return filteredList;
  }

  export { filterUsersList }