import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import HttpStatusCodes from 'http-status-codes';
import { Intent } from '@blueprintjs/core';
import { fetchMain, Routes } from '../../utils/api';
import { IAsyncError } from '../../utils/response/IAsyncError';
import { IRootState } from '../../store';
import FetchStatus from '../../common/enums/FetchStatus';
import { IResponse } from '../../utils/response/IResponse';
import CTFToaster from '../../components/CTFToaster/CTFToaster';
import { IElectricInfo } from '../../utils/response/IElectricInfo';

interface ISliceState {
  data: IElectricInfo[];
  fetchStatus: FetchStatus;
  error?: string;
}

export const fetchElectricList = createAsyncThunk('/electric/all/', async ({}, thunkAPI) => {
  try {
    const response = await fetchMain<IResponse<IElectricInfo>>(Routes.GET_ALL_INFO, {
      method: 'GET',
    });
    const data: any = await response.json();
    if (response.status === HttpStatusCodes.OK || response.status === HttpStatusCodes.CREATED) {
      return data;
    }

    CTFToaster.show({ message: 'Произошла неизвестная ошибка', intent: Intent.DANGER, icon: 'warning-sign' });
    return null;
  } catch (e) {
    const errorAction: IAsyncError = {
      error: 'Произошла неизвестная ошибка',
    };
    CTFToaster.show({ message: 'Произошла неизвестная ошибка', intent: Intent.DANGER, icon: 'warning-sign' });

    return thunkAPI.rejectWithValue(errorAction);
  }
});
export const { actions, reducer } = createSlice({
  name: 'allElectric',
  initialState: {
    data: [],
    fetchStatus: FetchStatus.NONE,
    error: '',
  } as ISliceState,
  reducers: {},
  extraReducers: {
    [fetchElectricList.pending.type]: (state) => {
      state.fetchStatus = FetchStatus.IN_PROGRESS;
    },
    [fetchElectricList.fulfilled.type]: (state, action: PayloadAction<IElectricInfo[]>) => {
      state.data = action.payload;
      state.error = '';
      state.fetchStatus = FetchStatus.SUCCESS;
    },
    [fetchElectricList.rejected.type]: (state, action: PayloadAction<IAsyncError>) => {
      state.error = action.payload.error;
      state.fetchStatus = FetchStatus.FAILED;
    },
  },
});

export const selectors = {
  dataSelector: (state: IRootState) => state.electicAll.data,
  fetchStatusSelector: (state: IRootState) => state.electicAll.fetchStatus,
  errorSelector: (state: IRootState) => state.electicAll.error,
};
