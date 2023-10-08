/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { AuthContext } from 'src/context/AuthContext';

export const useAuth = () => useContext(AuthContext);
