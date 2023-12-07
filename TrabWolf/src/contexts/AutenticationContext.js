import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({ name: 'teste da silva', status: 'ativo' });
  const [userInput, setUserInput] = useState('');
  const [outputList, setOutputList] = useState([]); // Adicione o estado para os resultados processados

  return (
    <AuthContext.Provider value={{ data, setData, userInput, setUserInput, outputList, setOutputList}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
