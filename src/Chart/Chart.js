
import React, { useEffect, useState } from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';


const Chart = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {

        var lab = [];
        var value = [];
        axios.get("http://localhost:3001/budget")
        .then(res => {
            console.log(res);
            for(var i = 0; i < res.data.myBudget.length; i++) {
                value.push(parseInt(res.data.myBudget[i].budget));
                lab.push (res.data.myBudget[i].title);

        }
        setChartData({
            labels: lab,
            datasets: [
                {
                    label: "Pie Chart",
                    data: value,
                    backgroundColor: [
                        '#90EE90',
                        '#ff6384',
                        '#36a2eb',
                        '#fd6b19',
                        '#F5DEB3',
                        '#5F9EA0',
                        '#00FFFF',
                    ],
                    borderWidth: 4
                }
            ]
        })
    })
        .catch(err => {
            console.log(err);
        })
        console.log(lab,value)
        
    }


    useEffect(() => {
        chart()
    }, [])


return (
    
        <div className = "App">
        <h1> Chart</h1>
        <Pie data = {chartData}></Pie>
    </div>
    
    )
}
export default Chart;
