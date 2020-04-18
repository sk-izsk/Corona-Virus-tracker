import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Center, CustomText } from '..';
import { BarChartTypes } from '../../utils';

interface Props {
  dataForBarChart: BarChartTypes;
}

const BarChartComponent: React.FC<Props> = ({ dataForBarChart }) => {
  return (
    <Center style={{ backgroundColor: '#ffffff', height: 300 }}>
      <CustomText type='bold-font'>Bar Chart</CustomText>
      <BarChart
        data={dataForBarChart as any}
        style={{ backgroundColor: 'white' }}
        width={350}
        height={270}
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: '#08130D',
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `black`,
          strokeWidth: 2,
          barPercentage: 0.5,
        }}
        verticalLabelRotation={30}
        yAxisLabel=''
        yAxisSuffix=''
      />
    </Center>
  );
};

export default BarChartComponent;
