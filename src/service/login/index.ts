import { IMenuItem } from '@/store/login/types'
import moRequest from '../index'
import { IDataType } from '../types'

import { IAccount, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export const accountLoginRequest = (account: IAccount) =>
  moRequest.post<IDataType<ILoginResult>>(LoginAPI.AccountLogin, {
    data: account
  })

export const requestUserInfoById = (id: number) =>
  moRequest.get<IDataType>(LoginAPI.LoginUserInfo + id, {
    showLoading: false
  })

export const requestUserMenusByRoleId = (id: number) =>
  moRequest.get<IDataType<IMenuItem[]>>(LoginAPI.UserMenus + id + '/menu', {
    showLoading: false
  })
