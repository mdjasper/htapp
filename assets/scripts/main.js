$(function () {
        $('#manchart').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Home Teaching Points'
            },
            subtitle: {
                text: 'How is our companionship doing?'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: -100, max: 100,
                title: {
                    text: 'points'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Companionship',
                data: [12, -13, 90, -30, 50, 2, 100, -50, 33, 0, -10, -6]
            }]
        });
    });
    
$(function () {
    $('#womanchart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Visiting Teaching Points'
        },
        subtitle: {
            text: 'How is our companionship doing?'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: -100, max: 100,
            title: {
                text: 'points'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Companionship',
            data: [100,100,100,100,100,100,100,100,100,100,100,100]
        }]
    });
});

