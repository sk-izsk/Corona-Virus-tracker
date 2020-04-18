export const isObjectEmpty = (obj: Object) => {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};

export const isArrayEmpty = (arr: Array<any>) => {
  if (arr.length === 0) {
    return true;
  } else {
    false;
  }
};

export const deathRate = (obj: any) => {
  return (Number(obj.deaths) / Number(obj.cases)) * 100;
};

export interface PieChartDataTypes {
  name: string;
  data: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
}

export const getDataForPieChart = (
  active: number,
  recovered: number,
  // tests: number,
  critical: number,
  deaths: number
) => {
  return [
    {
      name: 'Active',
      data: active,
      color: '#03a9f4',
      legendFontColor: '#000000',
      legendFontSize: 15,
    },
    {
      name: 'Recovered',
      data: recovered,
      color: '#69f0ae',
      legendFontColor: '#000000',
      legendFontSize: 15,
    },
    // {
    //   name: 'Test',
    //   data: tests,
    //   color: '#03a9f4',
    //   legendFontColor: '#000000',
    //   legendFontSize: 15,
    // },
    {
      name: 'Critical',
      data: critical,
      color: '#fb8c00',
      legendFontColor: '#000000',
      legendFontSize: 15,
    },
    {
      name: 'Death',
      data: deaths,
      color: '#c62828',
      legendFontColor: '#000000',
      legendFontSize: 15,
    },
  ];
};

export interface BarChartTypes {
  labels: string[];
  datasets: { data: number[] }[];
}

export const getDataForBarChart = (
  cases: number,
  active: number,
  recovered: number,
  critical: number,
  deaths: number
) => {
  return {
    labels: ['Cases', 'Active', 'Recovered', 'Critical', 'Death'],
    datasets: [
      {
        data: [cases, active, recovered, critical, deaths],
      },
    ],
  };
};
