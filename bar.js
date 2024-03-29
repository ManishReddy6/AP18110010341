
var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: "name",
        title: "revenue"
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        title: "Number of Visitors"
    },
    //Initializing Chart Series
    series: [
        {
            type: "Bar",
            dataSource: [
                { name: "Edwards", revenue: 35000 },
                { name: "Mulkiteo", revenue: 40000 },
                { name: "bothel", revenue: 45000 },
                { name: "Lynnwood", revenue: 50000 },
                { name: "Seatle", revenue: 80000 },
                { name: "Everett", revenue: 100000 },
            ],
            xName: "name",
            yName: "revenue"
        }
    ]
});
chart.appendTo("#container1");


var chart1 = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: "name",
        title: "revenue"
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        title: "Number of Visitors"
    },
    //Initializing Chart Series
    series: [
        {
            type: "Bar",
            dataSource: [
                { name: "Material Sale", revenue: 10000 },
                { name: "Maintainance", revenue: 45000 },
                { name: "HWT Replacement", revenue: 55000 },
                { name: "Bid Work Plumbing", revenue: 75000 },
                { name: "Service HVAC", revenue: 80000 },
                { name: "Bid Work HVAC", revenue: 120000 },
                { name: "Service Plumbing", revenue: 200000 }
            ],
            xName: "name",
            yName: "revenue"
        }
    ]
});

chart1.appendTo("#container2");