$(function () {
    $('#container').highcharts({
     colors: ["#af0a21","#2b505e","#3c1f75","#55504c"],
      chart: {
         defaultSeriesType: 'line',
         spacingBottom: 25,
         renderTo: 'chart',
         style: {
                fontFamily: "'Futura','Arial'", 
            } 
      },
      title: {
         text: 'Index of tariff unit prices versus provider unit costs'
      },
      credits: {
        text: '© Nuffield Trust',
        href: 'http://www.nuffieldtrust.org.uk'
    },
      tooltip: {
          pointFormat: '<b>{series.name}:</b> {point.y}<br />',
          valueDecimals: 2,
          shared: true,
        },
        xAxis: {
        		title: '',
            labels: {rotation: -45, y: 40},
            categories: ['2009-10','2010-11','2011-12','2012-13','2013-14','2014-15','2015-16','2016-17','2017-18','2018-19','2019-20','2020-21']
        },
				yAxis: {
        title: {text:'Index: 2009-10 = 1', x: -5},
        labels: {
            formatter: function() {
                return this.value;
            }
            },

        },
        series: [
        {
            name: 'Tariff unit cash prices',
            data: [1,1,0.96727,0.95469549,0.94037505765,0.9253290567276,0.941984979748697,0.944377621597259,0.94399987054862,0.952873469331777,0.96089666394355]
        },{
            name: 'Provider unit cash costs, after inflation and reported efficiencies - actual',
            data: [1,0.996705,0.967862105504622,0.970138517176769,0.972913113335895,0.971570493239491,0.981655394959317,null,null,null,null]
        },{
            name: 'Provider unit cash costs, after inflation and reported efficiencies - anticipated',
            data: [null,null,null,null,null,null,0.981655394959317,0.984148799662513,0.983755140142648,0.993002438459989,1.00136351899182],
            color: '#2b505e',
            dashStyle: 'shortdash',

        },
                
]
    });
});