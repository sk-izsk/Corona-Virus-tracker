import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { Center, CustomText } from '..';
import { PieChartDataTypes } from '../../utils';

interface Props {
  dataForPieChart: PieChartDataTypes;
}

const PieChartComponent: React.FC<Props> = ({ dataForPieChart }) => {
  return (
    <Center style={{ backgroundColor: '#ffffff' }}>
      <CustomText type='bold-font'>Pie Chart</CustomText>
      <PieChart
        data={dataForPieChart as any}
        width={400}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#1E2923',
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: '#08130D',
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2, //
          barPercentage: 0.5,
        }}
        accessor='data'
        backgroundColor='#ffffff'
        paddingLeft='15'
      />
    </Center>
  );
};

export default PieChartComponent;
