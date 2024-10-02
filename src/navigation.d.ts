
export type RootStackParamList = {
    Home: undefined;         // A tela Home não espera parâmetros
    AddUser: undefined;     // A tela AddUser não espera parâmetros
    EditUser: { id: string }; // A tela EditUser espera um parâmetro `id`
    DetailsUser: { id: string }; // A tela DetailsUser espera um parâmetro `id`
    Login: undefined;       // A tela Login não espera parâmetros
  };
  