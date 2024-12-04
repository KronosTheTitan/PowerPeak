let People = ["Caroline", "Dilan", "Frans", "Rob"];
let TimeSpans = [["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","22:00","23:00"],
    ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
    ["January","February","March","April","May","June","July","August","September","October","November","December"],
    ];
let ConsumptionTotal =
    [[1,0,1,1,3,4,6,5,4,4,5,6,5,4,4,4,5,7,10,8,6,4,2,1,1],
    [5,5,5,5,5,7,7],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],]

let currentChartTotalConsumption = 1;
let PerPersonConsumptionState = 2;
let HourlyPanelYield = [0,0,0,0,0,0,0,1,2,5,7,9,10,10,9,7,5,2,1,0,0,0,0,0,0]
let PersonalConsumption = [
    [55, 49, 44, 24],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]];

const blue = "#4285f4";
const red = "#ea4335";
const yellow = "#fbbc05";
const green = "#34a853";
const barColors = [blue,red,yellow,green];

createCharts()

function createCharts(){
    new Chart("ConsumptionGraph", {
        type: "bar",
        data: {
            labels: TimeSpans[0],
            data: ConsumptionTotal[0],
            datasets: [{
                backgroundColor: blue,
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "Total Consumption (in KwH)"
            }
        }
    });

    new Chart("PerPersonConsumptionGraph", {
        type: "pie",
        data: {
            labels: People,
            datasets: [{
                backgroundColor: barColors,
                data: PersonalConsumption[PerPersonConsumptionState]
            }]
        },
        options: {
            legend: {display: true},
            title: {
                display: true,
                text: "Individual Consumption"
            }
        }
    });

    new Chart("SavingsComparedToLastYearGraph", {
        type: "bar",
        data: {
            labels: TimeSpans[1],
            datasets: [{
                backgroundColor: blue,
                data: ConsumptionTotal[1],
                fill: {value: 0}
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "Savings Compared to same month last year (in KwH)"
            }
        }
    });

    new Chart("SolarPanelYieldGraph", {
        type: "line",
        data: {
            labels: TimeSpans[0],
            datasets: [{
                backgroundColor: blue,
                data: HourlyPanelYield
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "Solar Panel Yield (in KwH)"
            }
        }
    });
}