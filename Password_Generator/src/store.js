import { configureStore } from '@reduxjs/toolkit'
import generatePassword from './Pass_Slice';
import deletedata from './Del_Slice';

export const store = configureStore({
  reducer: {
    generate:generatePassword,
    deletedData:deletedata,

  },
})