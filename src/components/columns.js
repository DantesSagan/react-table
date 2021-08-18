export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'date_of_birth',
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
  },
];

export const GROUP_COLUMNS = [
  {
    Header: 'Расписание на первую неделю, 1-5 марта',
    Footer: 'Расписание на первую неделю, 1-5 марта',
    accessor: 'id',
    columns: [
      {
        Header: 'Время',
        Footer: 'Name',
        columns: [
          {
            Header: 'Дата/число',
            Footer: 'Дата/число',
            accessor: 'date',
          },
          {
            Header: 'Часы',
            Footer: 'Last Name',
            accessor: 'hours',
          },
        ],
      },
      {
        Header: 'Учебный процесс',
        Footer: 'Учебный процесс',
        columns: [
          {
            Header: 'Предметы',
            Footer: 'Предметы',
            accessor: 'lessons',
          },
          {
            Header: 'Аудитория',
            Footer: 'Аудитория',
            accessor: 'room',
          },
        ],
      },
    ],
  },
];
