let graphState = 0;
let graphTimeFrame = 0;

let data = [
    [   //consumption rates
        [1,0,1,1,3,4,6,5,4,4,5,6,5,4,4,4,5,7,10,8,6,4,2,1,1], //hourly consumption
        [5,5,5,5,5,7,7], //daily consumption
        [1,2,3,4,5,6,7,8,9,10,11,12], // monthly consumption
        [1,2,3,4,5]
    ],
    [   //per person consumption
        [1,2,3,4],
        [4,3,2,1],
        [1,2,3,4],
        [1,2,3,4]
    ],
    [   //per person consumption
        [1,2,3,4],
        [4,3,2,1],
        [1,2,3,4],
        [1,2,3,4]
    ],
    [   //per person consumption
        [1,2,3,4],
        [4,3,2,1],
        [1,2,3,4],
        [1,2,3,4]
    ]
]
const timeSpans = [
    ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","22:00","23:00"],
    ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    ["January","February","March","April","May","June","July","August","September","October","November", "December"],
    ["2019","2020","2021","2022","2023","2024"]
];

let chart;

const graphTypes = ["bar","pie","bar","line"];

const blue = "#4285f4";
const red = "#ea4335";
const yellow = "#fbbc05";
const green = "#34a853";
const barColors = [blue,[blue,red,yellow,green],blue,blue];

function main(){
    createGraph()
}

function updateGraph(){

    let labels = timeSpans[graphTimeFrame];

    if(graphState === 1){
        labels = ["Caroline", "Dilan", "Frans", "Rob"];
    }

    chart.destroy();

    chart = new Chart("Graph", {
        type: graphTypes[graphState],
        data: {
            labels: timeSpans[graphTimeFrame],
            datasets: [{
                data: data[graphState][graphTimeFrame],
                backgroundColor: barColors[graphState],
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "Graph"
            }
        }
    });
}

function createGraph(){
    chart = new Chart("Graph", {
        type: graphTypes[graphState],
        data: {
            labels: timeSpans[graphTimeFrame],
            datasets: [{
                data: data[graphState][graphTimeFrame],
                backgroundColor: barColors[graphState],
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "Graph"
            }
        }
    });
}

function SetTimeframe(newTimeFrame){
    graphTimeFrame = newTimeFrame;

    document.getElementById("Time3").classList.add("UnSelected")
    document.getElementById("Time3").classList.remove("Selected")

    document.getElementById("Time2").classList.add("UnSelected")
    document.getElementById("Time2").classList.remove("Selected")

    document.getElementById("Time1").classList.add("UnSelected")
    document.getElementById("Time1").classList.remove("Selected")

    document.getElementById("Time0").classList.add("UnSelected")
    document.getElementById("Time0").classList.remove("Selected")

    document.getElementById("Time" + newTimeFrame).classList.add("Selected")
    document.getElementById("Time" + newTimeFrame).classList.remove("UnSelected")

    updateGraph();

    console.log(newTimeFrame);
}

function setGraphState(newGraphState){
    graphState = newGraphState;

    document.getElementById("State3").classList.add("UnSelected")
    document.getElementById("State3").classList.remove("Selected")

    document.getElementById("State2").classList.add("UnSelected")
    document.getElementById("State2").classList.remove("Selected")

    document.getElementById("State1").classList.add("UnSelected")
    document.getElementById("State1").classList.remove("Selected")

    document.getElementById("State0").classList.add("UnSelected")
    document.getElementById("State0").classList.remove("Selected")

    document.getElementById("State" + newGraphState).classList.add("Selected")
    document.getElementById("State" + newGraphState).classList.remove("UnSelected")

    updateGraph();
}