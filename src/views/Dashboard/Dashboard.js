import React from 'react'
import { Chart } from 'react-charts'
import { Bar } from 'react-chartjs-2';

function Dashboard() {

  const state = {
    labels: ['1', '2', '3',
      '4', '5'],
    datasets: [
      {
        label: 'January',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: [10000, 12000, 12000, 13000, 34000]
      }
    ]
  }


  return (
    // <div
    //   style={{
    //     width: '400px',
    //     height: '300px'
    //   }}
    // >
    //   <chart data={data} axes={axes}  />
    // </div>

    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: 'Bar Chart',
            fontSize: 20,
            position: 'top'
          }//,
          // legend: {
          //   display: true,
          //   position: 'right'
          // }
        }}
      />
    </div>


  )
}
export default Dashboard;