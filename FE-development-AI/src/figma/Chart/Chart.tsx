import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { 
  ChartContainer, 
  ChartHeader, 
  ChartTitle, 
  ChartDate, 
  ChartContent,
  ChartWrapper,
  ChartLegend, 
  LegendItem, 
  LegendColor
} from './Chart.styles';

// Sample data - replace with your actual data
const data = [
  { name: 'Jan', sales: 4000, purchase: 2400 },
  { name: 'Feb', sales: 3000, purchase: 1398 },
  { name: 'Mar', sales: 2000, purchase: 9800 },
  { name: 'Apr', sales: 2780, purchase: 3908 },
  { name: 'May', sales: 1890, purchase: 4800 },
  { name: 'Jun', sales: 2390, purchase: 3800 },
  { name: 'Jul', sales: 3490, purchase: 4300 },
];

const Chart: React.FC = () => {
  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle>Performance</ChartTitle>
        <ChartDate>Jan - Jul 2023</ChartDate>
      </ChartHeader>
      <ChartContent>
        <ChartWrapper>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorPurchase" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F6AD55" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F6AD55" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#718096', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#718096', fontSize: 12 }}
                width={40}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #edf2f7',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  padding: '8px 12px',
                  fontSize: '12px',
                }}
                labelStyle={{ fontWeight: 600, color: '#2d3748', marginBottom: '4px' }}
                formatter={(value: number) => [`${value}`, '']}
              />
              <Area 
                type="monotone" 
                dataKey="sales" 
                stroke="#4FD1C5" 
                fillOpacity={1} 
                fill="url(#colorSales)" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="purchase" 
                stroke="#F6AD55" 
                fillOpacity={1} 
                fill="url(#colorPurchase)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartWrapper>
        <ChartLegend>
          <LegendItem>
            <LegendColor color="#4FD1C5" />
            <span>Sales</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="#F6AD55" />
            <span>Purchase</span>
          </LegendItem>
        </ChartLegend>
      </ChartContent>
    </ChartContainer>
  );
};

export default Chart;
