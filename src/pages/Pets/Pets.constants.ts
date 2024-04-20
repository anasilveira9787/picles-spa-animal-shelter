interface IFilterColumns { 
  name: 'gender' | 'size' | 'type';
  title: string;
  options: {
    value: string;
    text: string;
  }[];
}

export const filterColumns : IFilterColumns[] = [
  {
    name: 'type',
    title: 'Espécie',
    options: [
      { value: '', text: 'Todos' },
      { value: 'Dog', text: 'Cachorros' },
      { value: 'Cat', text: 'Gatos' },
    ],
  },
  {
    name: 'size',
    title: 'Porte',
    options: [
      { value: '', text: 'Todos' },
      { value: 'small', text: 'Pequeno' },
      { value: 'medium', text: 'Médio' },
      { value: 'large', text: 'Grande' },
    ],
  },
  {
    name: 'gender',
    title: 'Sexo',
    options: [
      { value: '', text: 'Todos' },
      { value: 'Male', text: 'Macho' },
      { value: 'Female', text: 'Fêmea' },
    ],
  }
]