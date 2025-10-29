import { useDispatch, useSelector } from 'react-redux';
import { store } from './index';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
