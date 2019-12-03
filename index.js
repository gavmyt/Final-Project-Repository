var dataPromise = d3.csv("index.csv");

dataPromise.then(function(lbj)
{
    console.log(lbj)
    setup(lbj);
}),
    function(err)
    {
    console.log("fail",err);
}

var screen = {width:800,height:600}
var margins = {top:10,right:50,bottom:50,left:150}

var setup = function(lbj)
{
   d3.select("svg")
        .attr("width",screen.width)
        .attr("height",screen.height)
        .append("g")
        .attr("id","graph")
        .attr("transform","translate("+margins.left+
                ","+margins.top+")");
    
    
    var width = screen.width - margins.left - margins.right;
    var height = screen.height - margins.top - margins.bottom;
    
    var xScale = d3.scaleBand()
                .range([0,width])
                .padding(0.1)
    
    var yScale = d3.scaleLinear()
                .domain([0,35000])
                .range([height,0]);
            
    var xAxis = d3.axisBottom(xScale)
    var yAxis = d3.axisLeft(yScale)
    
    d3.select("svg")
        .append("g")
        .attr("class","axis");
    
    d3.select(".axis")
        .append("g")
        .attr("id","xAxis")
        .attr("transform","translate(" + margins.left + "," + (margins.top + height) + ")")
        .call(xAxis)
    
    d3.select(".axis")
        .append("g")
        .attr("id","yAxis")
        .attr("transform","translate(100,"+margins.top+")")
        .call(yAxis)
}

var drawGraph = function(lbj, xScale, yScale)
{
    var graphs = d3.select("#graph")
                    .data(lbj)
                    .enter()
                    .append("g")    
    
}
