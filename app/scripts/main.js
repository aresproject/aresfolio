// "use strict";!function(a){a(window).load(function(){a(".content").mCustomScrollbar({scrollButtons:{enable:!0},callbacks:{onScroll:function(){a("."+this.attr("id")+"-pos").text(mcs.top)}}}),a(".output a[rel~='about']").click(function(b){b.preventDefault(),a(".content").mCustomScrollbar("scrollTo","#about"),a(".content").mCustomScrollbar("scrollTo",a(this).attr("href"))}),a(".output a[rel~='contact']").click(function(b){b.preventDefault(),a(".content").mCustomScrollbar("scrollTo","#contact")}),a(".output a[rel~='passion']").click(function(b){b.preventDefault(),a(".right-content").mCustomScrollbar("scrollTo","#passion")}),a(".output a[rel~='portfolio']").click(function(b){b.preventDefault(),a(".right-content").mCustomScrollbar("scrollTo","#portfolio")}),a(".output a[rel~='exp']").click(function(b){b.preventDefault(),a(".right-content").mCustomScrollbar("scrollTo","#exp")}),a(".output a[rel~='graph']").click(function(b){b.preventDefault(),a(".right-content").mCustomScrollbar("scrollTo","#graph")})})}(jQuery);
'use strict';
        
(function($){
    $(window).load(function(){
        $(".content").mCustomScrollbar({
            scrollButtons:{
                enable:true
            },
            callbacks:{
                onScroll:function(){ 
                    $("."+this.attr("id")+"-pos").text(mcs.top);
                }
            },
            setHeight:650
        });
        $(".output a[rel~='about']").click(function(e){
            e.preventDefault();
            $(".left-content").mCustomScrollbar("scrollTo","#about");
            $(".left-content").mCustomScrollbar("scrollTo",$(this).attr("href"));
        });
        $(".output a[rel~='contact']").click(function(e){
            e.preventDefault();
            $(".left-content").mCustomScrollbar("scrollTo","#contact");
        });
        $(".output a[rel~='blog']").click(function(e){
            e.preventDefault();
            $(".left-content").mCustomScrollbar("scrollTo","#blog");
        });
        $(".output a[rel~='passion']").click(function(e){
            e.preventDefault();
            $(".right-content").mCustomScrollbar("scrollTo","#passion");
        });
        $(".output a[rel~='portfolio']").click(function(e){
            e.preventDefault();
            $(".right-content").mCustomScrollbar("scrollTo","#portfolio");
        });
        $(".output a[rel~='exp']").click(function(e){
            e.preventDefault();
            $(".right-content").mCustomScrollbar("scrollTo","#exp");
        });
        $(".output a[rel~='graph']").click(function(e){
            e.preventDefault();
            $(".right-content").mCustomScrollbar("scrollTo","#graph");
        });
    });
})(jQuery);
$(function () { //PIE CHART
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart_pie',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                backgroundColor: null,
                plotShadow: false
            },
            title: {
                text: 'Skill Areas'
            },
            tooltip: {
                pointFormat: '{series.name}: {point.percentage}%',
                percentageDecimals: 1
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
                            return this.point.name + this.percentage +' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Skill Set',
                data: [
                    ['Sys Development',   45.00],
                    ['Graphics \u0026 Design',       25.00],
                    ['Project Management',       30.00]
                ]
            }]
        });
    });   
});
$(function () { //BAR CHART
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart_bar',
                backgroundColor: null,
                type: 'bar'
            },
            title: {
                text: 'Web Development Frameworks'
            },
            xAxis: {
                categories: ['CodeIgniter', 'JQuery' ,'WordPress', 'Joomla'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Skill Level',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                formatter: function() {
                    return ''+
                        this.series.name +': '+ this.y +'% Proficiency';
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -100,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Proficiency Level',
                data: [80, 50, 80, 60]
            }]
        });
    }); 
});
$(function () { //COLUMN CHART
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart_column',
                backgroundColor: null,
                type: 'column'
            },
            title: {
                text: 'Graphics \u0026 Design'
            },
            xAxis: {
                categories: [
                    'Adobe Photoshop',
                    'Adode Indesign',
                    'Adobe Illustrator',
                    'Adobe Dreamweaver',
                    'Adobe Fireworks'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Proficiency Level'
                }
            },
            legend: {
                layout: 'vertical',
                backgroundColor: '#FFFFFF',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                shadow: true
            },
            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y +'%';
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
                series: [{
                name: 'Proficiency Level',
                data: [80, 40, 50, 70, 20]
    
            }]
        });
    }); 
});
$(function () { //LINE CHART
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart_line',
                type: 'line',
                marginRight: 130,
                backgroundColor: null,
                marginBottom: 25
            },
            title: {
                text: 'Utilized Software',
                x: -20 //center
            },
            xAxis: {
                categories: ['2006', '2007','2008','2009','2010','2011','2012']
            },
            yAxis: {
                title: {
                    text: 'Utilization Level'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return this.series.name +
                        this.x +': '+ this.y;
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
            series: [{
                name: 'Netbeans IDE',
                data: [0.0, 10.0, 20.0, 40.0, 0.0, 10.0, 50.0]
            }, {
                name: 'Eclipse Juno',
                data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10.0]
            }, {
                name: 'Win Visual Studio',
                data: [20.0, 30.00, 0.0, 0.0, 0.0, 40.0, 60.0]
            }, {
                name: 'Win SQLServer 2008',
                data: [0.0, 0.0, 0.0, 0.0, 20.0, 75.0, 95.0]
            },{
                name: 'Win Server 2008',
                data: [0.0, 0.0, 0.0, 0.0, 10.0, 50.0, 70.0]
            },{
                name: 'Linux',
                data: [0.0, 10.0, 30.0, 45.0, 55.0, 0.0, 0.0]
            },{
                name: 'PHPMyAdmin',
                data: [0.0, 0.0, 0.0, 10.0, 50.0, 70.0, 90.0]
            },{
                name: 'Notepad++',
                data: [0.0, 0.0, 0.0, 20.0, 60.0, 75.0, 80.0]
            }]
        });
    });
});