var dataPromise = d3.csv("index.csv");
console.log(dataPromise);
dataPromise.then(function(data)
{
    console.log(data)
    setup(data);
}),
    function(err)
    {
    console.log("fail",err);
    }

var screen = {width:800,height:600}
var margins = {top:10,right:50,bottom:50,left:100}

var setup = function(data)
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
                .domain(["Points","Assists","Rebounds","Blocks","Steals"])
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
        .call(yAxis);
    
    d3.select("svg")
        .append("circle")
        .attr("cx",600)
        .attr("cy",100)
        .attr("r", 6)
        .style("fill", "#ffb410");
    
    d3.select("svg")
        .append("circle")
        .attr("cx",600)
        .attr("cy",125)
        .attr("r", 6)
        .style("fill", "#CF093F");
    
   d3.select("svg")
        .append("text")
        .attr("x", 620)
        .attr("y", 105)
        .text("LeBron James")
        .style("font-size","15px")
        .style("fill","white")
    
    d3.select("svg")
        .append("text")
        .attr("x", 620)
        .attr("y", 130)
        .text("Michael Jordan")
        .style("font-size","15px")
        .style("fill","white");
    
    
    
drawGraph1(data, xScale, yScale, height);

                                        d3.select('#button1')
                                          .on('click', function()
                                            {
                                                console.log("I've been clicked!");

                                                d3.select("svg")
                                                  .remove();
                                            
                                                d3.select("#button1")
                                                  .remove();
                                            
                                            d3.select("#buttondiv")
                                                .append("button")
                                                .attr("id","button2")
                                                .text("Click to view career stats")
                                                .on('click', function()
                                                            {
                                                                location.reload()
                                                            }
                                                   )

                                                d3.select("#svgdiv")
                                                  .append("svg")
                                                  .attr("id","newsvg");

                                                d3.select("#newsvg")
                                                  .attr("width",screen.width)
                                                  .attr("height",screen.height)
                                                  .append("g")
                                                  .attr("id","graph")
                                                  .attr("transform","translate("+margins.left+
                                                            ","+margins.top+")");

                                                var width = screen.width - margins.left - margins.right;
                                                var height = screen.height - margins.top - margins.bottom;

                                                var xScale2 = d3.scaleBand()
                                                            .domain(["All NBA","All Defense","MVPs","DPOYs","Championships"])
                                                            .range([0,width])
                                                            .padding(0.1)

                                                var yScale2 = d3.scaleLinear()
                                                            .domain([0,20])
                                                            .range([height,0]);

                                                var xAxis2 = d3.axisBottom(xScale2)
                                                var yAxis2 = d3.axisLeft(yScale2)


                                                d3.select("#newsvg")
                                                  .append("g")
                                                  .attr("class","axis");

                                                d3.select(".axis")
                                                  .append("g")
                                                  .attr("id","xAxis2")
                                                  .attr("transform","translate(" + margins.left + "," + (margins.top + height) + ")")
                                                  .call(xAxis2)

                                                d3.select(".axis")
                                                  .append("g")
                                                  .attr("id","yAxis2")
                                                  .attr("transform","translate(100,"+margins.top+")")
                                                  .call(yAxis2);
                                            
                                             d3.select("#newsvg")
                                                .append("circle")
                                                .attr("cx",600)
                                                .attr("cy",100)
                                                .attr("r", 6)
                                                .style("fill", "#ffb410");

                                            d3.select("#newsvg")
                                                .append("circle")
                                                .attr("cx",600)
                                                .attr("cy",125)
                                                .attr("r", 6)
                                                .style("fill", "#CF093F");

                                           d3.select("#newsvg")
                                                .append("text")
                                                .attr("x", 620)
                                                .attr("y", 105)
                                                .text("LeBron James")
                                                .style("font-size","15px")
                                                .style("fill","white")

                                            d3.select("#newsvg")
                                                .append("text")
                                                .attr("x", 620)
                                                .attr("y", 130)
                                                .text("Michael Jordan")
                                                .style("font-size","15px")
                                                .style("fill","white");

                                    var bars2 = d3.select("#newsvg")
                                                  .append("g")
                                                  .attr("id","statsG2")
                                                  .attr("transform","translate("+margins.left+
                                                                                ","+margins.top+")")

                                    var g2 = bars2.selectAll(".rect")
                                                  .data(data)
                                                  .enter()
                                                  .append("g")
                                                  .classed('rect', true)

                                                // lebron all nba teams
                                                g2.append("rect")
                                                  .attr("x", 40.09803921568627)
                                                  .attr("y", yScale2(20)-(yScale2(20)-yScale2(data[0].AllNBA)))
                                                  .attr("width", 30)
                                                  .attr("height", height-(yScale2(data[0].AllNBA)))
                                                  .attr("fill", "#ffb410")
                        
                                                g2.append("text")
                                                  .attr("fill", "white")
                                                  .attr("class", "label")
                                                  .attr("x", 40.09803921568627)
                                                  .attr("y", yScale2(data[0].AllNBA))
                                                  .text(data[0].AllNBA)
                        
                                                // jordan all nba teams
                                                g2.append("rect")
                                                  .attr("x", 70.09803921568627)
                                                  .attr("y", yScale2(20)-(yScale2(20)-yScale2(data[1].AllNBA)))
                                                  .attr("width", 30)
                                                  .attr("height", height-(yScale2(data[1].AllNBA)))
                                                  .attr("fill", "#CF093F")
                                            
                                                g2.append("text")
                                                  .attr("fill", "white")
                                                  .attr("class", "label")
                                                  .attr("x", 70.09803921568627)
                                                  .attr("y", yScale2(data[1].AllNBA))
                                                  .text(data[1].AllNBA)
                                            
                                            // lebron all defense teams
                                                g2.append("rect")
                                                  .attr("x", 167.54901960784312)
                                                  .attr("y", yScale2(20)-(yScale2(20)-yScale2(data[0].AllDefense)))
                                                  .attr("width", 30)
                                                  .attr("height", height-(yScale2(data[0].AllDefense)))
                                                  .attr("fill", "#ffb410")
                        
                                                 g2.append("text")
                                                  .attr("fill", "white")
                                                  .attr("class", "label")
                                                  .attr("x", 167.54901960784312)
                                                  .attr("y", yScale2(data[0].AllDefense))
                                                  .text(data[0].AllDefense)
                                            
                                            // jordan all defense teams
                                                g2.append("rect")
                                                  .attr("x", 197.54901960784312)
                                                  .attr("y", yScale2(20)-(yScale2(20)-yScale2(data[1].AllDefense)))
                                                  .attr("width", 30)
                                                  .attr("height", height-(yScale2(data[1].AllDefense)))
                                                  .attr("fill", "#CF093F")
                        
                                                g2.append("text")
                                                  .attr("fill", "white")
                                                  .attr("class", "label")
                                                  .attr("x", 197.54901960784312)
                                                  .attr("y", yScale2(data[1].AllDefense))
                                                  .text(data[1].AllDefense)
                                            
                                            // lebron mvps
                                                g2.append("rect")
                                                  .attr("x", 295)
                                                  .attr("y", yScale2(20)-(yScale2(20)-yScale2(data[0].MVPs)))
                                                  .attr("width", 30)
                                                  .attr("height", height-(yScale2(data[0].MVPs)))
                                                  .attr("fill", "#ffb410")
                        
                                                g2.append("text")
                                                  .attr("fill", "white")
                                                  .attr("class", "label")
                                                  .attr("x", 295)
                                                  .attr("y", yScale2(data[0].MVPs))
                                                  .text(data[0].MVPs)
                                            
                                            // jordan mvps
                                                g2.append("rect")
                                                  .attr("x", 325)
                                                  .attr("y", yScale2(20)-(yScale2(20)-yScale2(data[1].MVPs)))
                                                  .attr("width", 30)
                                                  .attr("height", height-(yScale2(data[1].MVPs)))
                                                  .attr("fill", "#CF093F")
                        
                                                g2.append("text")
                                                  .attr("fill", "white")
                                                  .attr("class", "label")
                                                  .attr("x", 325)
                                                  .attr("y", yScale2(data[1].MVPs))
                                                  .text(data[1].MVPs)
                                            
                                            // lebron dpoys
                                                g2.append("rect")
                                                  .attr("x", 422.45098039215685)
                                                  .attr("y", yScale2(20)-(yScale2(20)-yScale2(data[0].DPOYs)))
                                                  .attr("width", 30)
                                                  .attr("height", height-(yScale2(data[0].DPOYs)))
                                                  .attr("fill", "#ffb410")
                        
                                                g2.append("text")
                                                  .attr("fill", "white")
                                                  .attr("class", "label")
                                                  .attr("x", 422.45098039215685)
                                                  .attr("y", yScale2(data[0].DPOYs))
                                                  .text(data[0].DPOYs)
                                            
                                            // jordan dpoys
                                                g2.append("rect")
                                                  .attr("x", 452.45098039215685)
                                                  .attr("y", yScale2(20)-(yScale2(20)-yScale2(data[1].DPOYs)))
                                                  .attr("width", 30)
                                                  .attr("height", height-(yScale2(data[1].DPOYs)))
                                                  .attr("fill", "#CF093F")
                        
                                                g2.append("text")
                                                  .attr("fill", "white")
                                                  .attr("class", "label")
                                                  .attr("x", 452.45098039215685)
                                                  .attr("y", yScale2(data[1].DPOYs))
                                                  .text(data[1].DPOYs)
                                            
                                            // lebron championships
                                                g2.append("rect")
                                                  .attr("x", 549.9019607843137)
                                                  .attr("y", yScale2(20)-(yScale2(20)-yScale2(data[0].Championships)))
                                                  .attr("width", 30)
                                                  .attr("height", height-(yScale2(data[0].Championships)))
                                                  .attr("fill", "#ffb410")
                        
                                                g2.append("text")
                                                  .attr("fill", "white")
                                                  .attr("class", "label")
                                                  .attr("x", 549.9019607843137)
                                                  .attr("y", yScale2(data[0].Championships))
                                                  .text(data[0].Championships)
                                            
                                            // jordan championships
                                                g2.append("rect")
                                                  .attr("x", 579.9019607843137)
                                                  .attr("y", yScale2(20)-(yScale2(20)-yScale2(data[1].Championships)))
                                                  .attr("width", 30)
                                                  .attr("height", height-(yScale2(data[1].Championships)))
                                                  .attr("fill", "#CF093F")
                        
                                                g2.append("text")
                                                  .attr("fill", "white")
                                                  .attr("class", "label")
                                                  .attr("x", 579.9019607843137)
                                                  .attr("y", yScale2(data[1].Championships))
                                                  .text(data[1].Championships)
                            }
                           );
}
var drawGraph1 = function(data, xScale, yScale, height)
{
  var bars = d3.select("svg")
               .append("g")
               .attr("id","statsG")
               .attr("transform","translate("+margins.left+
                ","+margins.top+")")
    
    var g = bars.selectAll(".rect")
                .data(data)
                .enter()
                .append("g")
                .classed('rect', true)
                
               // lebron points
               g.append("rect")
                .attr("x", 40.09803921568627)
                .attr("y", yScale(35000)-(yScale(35000)-yScale(data[0].Points)))
                .attr("width", 30)
                .attr("height", height-(yScale(data[0].Points)))
                .attr("fill", "#ffb410")
                
               g.append("text")
                .attr("fill", "white")
                .attr("class", "label")
                .attr("x", 40.09803921568627)
                .attr("y", yScale(data[0].Points))
                .text(data[0].Points)
    
               // jordan points
               g.append("rect")
                .attr("x", 70.09803921568627)
                .attr("y", yScale(35000)-(yScale(35000)-yScale(data[1].Points)))
                .attr("width", 30)
                .attr("height", height-(yScale(data[1].Points)))
                .attr("fill", "#CF093F")
    
               g.append("text")
                .attr("fill", "white")
                .attr("class", "label")
                .attr("x", 70.09803921568627)
                .attr("y", yScale(data[1].Points))
                .text(data[1].Points)
    
               // lebron assists
               g.append("rect")
                .attr("x", 167.54901960784312)
                .attr("y", yScale(35000)-(yScale(35000)-yScale(data[0].Assists)))
                .attr("width", 30)
                .attr("height", height-(yScale(data[0].Assists)))
                .attr("fill", "#ffb410")
    
               g.append("text")
                .attr("fill", "white")
                .attr("class", "label")
                .attr("x", 167.54901960784312)
                .attr("y", yScale(data[0].Assists))
                .text(data[0].Assists)
    
               // jordan assists
               g.append("rect")
                .attr("x", 197.54901960784312)
                .attr("y", yScale(35000)-(yScale(35000)-yScale(data[1].Assists)))
                .attr("width", 30)
                .attr("height", height-(yScale(data[1].Assists)))
                .attr("fill", "#CF093F")
    
               g.append("text")
                .attr("fill", "white")
                .attr("class", "label")
                .attr("x", 197.54901960784312)
                .attr("y", yScale(data[1].Assists))
                .text(data[1].Assists)
    
               // lebron rebounds
               g.append("rect")
                .attr("x", 295)
                .attr("y", yScale(35000)-(yScale(35000)-yScale(data[0].Rebounds)))
                .attr("width", 30)
                .attr("height", height-(yScale(data[0].Rebounds)))
                .attr("fill", "#ffb410")
    
               g.append("text")
                .attr("fill", "white")
                .attr("class", "label")
                .attr("x", 295)
                .attr("y", yScale(data[0].Rebounds))
                .text(data[0].Rebounds)
    
               // jordan rebounds
               g.append("rect")
                .attr("x", 325)
                .attr("y", yScale(35000)-(yScale(35000)-yScale(data[1].Rebounds)))
                .attr("width", 30)
                .attr("height", height-(yScale(data[1].Rebounds)))
                .attr("fill", "#CF093F")
    
               g.append("text")
                .attr("fill", "white")
                .attr("class", "label")
                .attr("x", 325)
                .attr("y", yScale(data[1].Rebounds))
                .text(data[1].Rebounds)
    
               // lebron blocks
               g.append("rect")
                .attr("x", 422.45098039215685)
                .attr("y", yScale(35000)-(yScale(35000)-yScale(data[0].Blocks)))
                .attr("width", 30)
                .attr("height", height-(yScale(data[0].Blocks)))
                .attr("fill", "#ffb410")
    
               g.append("text")
                .attr("fill", "white")
                .attr("class", "label")
                .attr("x", 422.45098039215685)
                .attr("y", yScale(data[0].Blocks))
                .text(data[0].Blocks)
    
               // jordan blocks
               g.append("rect")
                .attr("x", 452.45098039215685)
                .attr("y", yScale(35000)-(yScale(35000)-yScale(data[1].Blocks)))
                .attr("width", 30)
                .attr("height", height-(yScale(data[1].Blocks)))
                .attr("fill", "#CF093F")
    
               g.append("text")
                .attr("fill", "white")
                .attr("class", "label")
                .attr("x", 452.45098039215685)
                .attr("y", yScale(data[1].Blocks))
                .text(data[1].Blocks)
    
               // lebron steals
               g.append("rect")
                .attr("x", 549.9019607843137)
                .attr("y", yScale(35000)-(yScale(35000)-yScale(data[0].Steals)))
                .attr("width", 30)
                .attr("height", height-(yScale(data[0].Steals)))
                .attr("fill", "#ffb410")
    
               g.append("text")
                .attr("fill", "white")
                .attr("class", "label")
                .attr("x", 549.9019607843137)
                .attr("y", yScale(data[0].Steals))
                .text(data[0].Steals)
    
               // jordan steals
               g.append("rect")
                .attr("x", 579.9019607843137)
                .attr("y", yScale(35000)-(yScale(35000)-yScale(data[1].Steals)))
                .attr("width", 30)
                .attr("height", height-(yScale(data[1].Steals)))
                .attr("fill", "#CF093F")
    
               g.append("text")
                .attr("fill", "white")
                .attr("class", "label")
                .attr("x", 579.9019607843137)
                .attr("y", yScale(data[1].Steals))
                .text(data[1].Steals)

}


    
     
    

