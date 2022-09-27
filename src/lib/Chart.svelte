<div class="w3-container" id='chart' style="color: red;">
    <svg></svg>
</div>
<script>
    import { csv, select, scaleLinear, extent, axisLeft, axisBottom, min, max } from "d3";
    const csvURL =
        "https://raw.githubusercontent.com/fantasydatapros/data/master/yearly/2021.csv";
    const width = window.innerWidth/2;
    const height = window.innerHeight/2;
    const xValue = (d) => d.FantasyPoints;
    const yValue = (d) => d.Tgt;
    const pos = (d) => d.Pos;

    const svg = select("div")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const margin = {
        top: 20,
        right: 100,
        bottom: 20,
        left: 50,
    };
    //Parsing all the columns from the data set.
    const parseRow = (d) => {
        d.Tgt = +d.Tgt;
        d.FantasyPoints = +d.FantasyPoints;
        d.Rec = +d.Rec;
        d.PassingYds = +d.PassingYds;
        d.PassingTD = +d.PassingTD;
        d.PassingAtt = +d.PassingAtt;
        d.RushingYds = +d.RushingYds;
        d.RushingTD = +d.RushingTD;
        d.RushingAtt = +d.RushingAtt;
        d.ReceivingYds + d.ReceivingYds;
        d.ReceivingTD = +d.ReceivingTD;
        return d;
    };

    const main = async () => {
        //const data = await csv(csvURL, parseRow);
        console.log('data',data)
        const xRange = scaleLinear().domain([
            min(data, xValue),
            max(data, xValue),
        ]);
        const x = scaleLinear()
            .domain(extent(data, xValue))
            .range([margin.left, width - margin.right]);

        const y = scaleLinear()
            .domain(extent(data, yValue))
            .range([height - margin.bottom, margin.top]);

        console.log("x axis range: ", xRange, " y axis range: ", y);
        const marks = data.map((d) => ({
            x: x(xValue(d)),
            y: y(yValue(d)),
            position: pos(d),
        }));

        svg.selectAll("circle")
            .data(marks)
            .join("circle")
            .attr("class", (d) => d.position)
            .attr("cx", (d) => d.x)
            .attr("cy", (d) => d.y)
            .attr("r", 5)
            .attr("fill", (d) => {
                if (d.position == "RB") return "#FF0050";
                else if (d.position == "WR") return "blue";
                else if (d.position == "QB") return "red";
                else return "black";
            });
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(axisLeft(y));

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(axisBottom(x));

        console.log("marks", marks);
    };
    main();
</script>
<style>
#chart{
    width: 1000px;
    height: 1000px;
    background-color: brown;
}
</style>
