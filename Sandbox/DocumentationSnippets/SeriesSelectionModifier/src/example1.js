import {SciChartSurface} from "scichart/Charting/Visuals/SciChartSurface";
import {NumericAxis} from "scichart/Charting/Visuals/Axis/NumericAxis";
import {EllipsePointMarker} from "scichart/Charting/Visuals/PointMarkers/EllipsePointMarker";
import {XyDataSeries} from "scichart/Charting/Model/XyDataSeries";
import {FastLineRenderableSeries} from "scichart/Charting/Visuals/RenderableSeries/FastLineRenderableSeries";
import {NumberRange} from "scichart/Core/NumberRange";
import {SeriesSelectionModifier} from "scichart/Charting/ChartModifiers/SeriesSelectionModifier";

export async function initSciChart() {
    const { sciChartSurface, wasmContext } = await SciChartSurface.create("scichart-div-id");

    sciChartSurface.xAxes.add(new NumericAxis(wasmContext, { growBy: new NumberRange(0.1, 0.1) }));
    sciChartSurface.yAxes.add(new NumericAxis(wasmContext, { growBy: new NumberRange(0.1, 0.1) }));

    // Create a chart with line series with a point-marker
    sciChartSurface.renderableSeries.add(new FastLineRenderableSeries(wasmContext, {
        stroke: "SteelBlue",
        strokeThickness: 3,
        pointMarker: new EllipsePointMarker(wasmContext, {
            width: 10,
            height: 10,
            strokeThickness: 2,
            stroke: "SteelBlue",
            fill: "LightSteelBlue"}),
        dataSeries: new XyDataSeries(wasmContext, {
            xValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            yValues: [4.3, 5.3, 6, 6.3, 6, 5.2, 4.5, 4.6, 5, 6, 7, 8]
        }),

        // using onSelectedChanged callback, change the style of the series on selection
        onSelectedChanged: sourceSeries => {
            sourceSeries.stroke = sourceSeries.isSelected ? "white" : "SteelBlue";
            sourceSeries.pointMarker.fill = sourceSeries.isSelected ? "white" : "SteelBlue";
            sourceSeries.pointMarker.stroke = sourceSeries.isSelected ? "white" : "LightSteelBlue";
        }
    }));

    // Add the DatapointSelectionModifier to the chart
    sciChartSurface.chartModifiers.add(new SeriesSelectionModifier( ));
}
