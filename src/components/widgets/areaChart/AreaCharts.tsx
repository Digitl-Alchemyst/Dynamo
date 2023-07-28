import './areaCharts.scss'
import React from 'react';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


interface AreaData {
  name: string;
  comics: number;
  mtg: number;
  pokemon: number;
  figures: number;
}

type Props = {
  title: string;
  dataKey: string;
  areaChartData: AreaData[]; // Update the prop name here
};



const AreaCharts = (props: Props) => {
  return (
    <div className="areaChart">
      <h1>{props.title}</h1>
      <div className="chart">
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={props.areaChartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="comics"
            stackId="1"
            stroke="#EDD62F"
            fill="#D8C749"
          />
          <Area
            type="monotone"
            dataKey="mtg"
            stackId="1"
            stroke="#6438EC"
            fill="#6D4BD1"
          />
          <Area
            type="monotone"
            dataKey="pokemon"
            stackId="1"
            stroke="#38EC3B"
            fill="#4BD14E"
          />
          <Area
            type="monotone"
            dataKey="figures"
            stackId="1"
            stroke="#385FEC"
            fill="#4b68d1"
          />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AreaCharts