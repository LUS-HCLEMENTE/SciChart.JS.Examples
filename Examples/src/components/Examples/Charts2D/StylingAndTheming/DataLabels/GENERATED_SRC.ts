export const code = `import * as React from "react";
import {NumericAxis} from "scichart/Charting/Visuals/Axis/NumericAxis";
import {FastColumnRenderableSeries} from "scichart/Charting/Visuals/RenderableSeries/FastColumnRenderableSeries";
import {XyDataSeries} from "scichart/Charting/Model/XyDataSeries";
import {ZoomPanModifier} from "scichart/Charting/ChartModifiers/ZoomPanModifier";
import {ZoomExtentsModifier} from "scichart/Charting/ChartModifiers/ZoomExtentsModifier";
import {MouseWheelZoomModifier} from "scichart/Charting/ChartModifiers/MouseWheelZoomModifier";
import {SciChartSurface} from "scichart";
import {NumberRange} from "scichart/Core/NumberRange";
import classes from "../../../../Examples/Examples.module.scss";
import {WaveAnimation} from "scichart/Charting/Visuals/RenderableSeries/Animations/WaveAnimation";
import {appTheme} from "../../../theme";
import {GradientParams} from "scichart/Core/GradientParams";
import {Point} from "scichart/Core/Point";
import {
    EHorizontalTextPosition,
    EVerticalTextPosition
} from "scichart/types/TextPosition";
import {PaletteFactory} from "scichart/Charting/Model/PaletteFactory";
import {Thickness} from "scichart/Core/Thickness";

const divElementId = "chart";

const drawExample = async () => {
    // Create a SciChartSurface
    const {sciChartSurface, wasmContext} = await SciChartSurface.create(divElementId, {theme: appTheme.SciChartJsTheme});

    // Add an X, Y Axis
    sciChartSurface.xAxes.add(new NumericAxis(wasmContext));
    sciChartSurface.yAxes.add(new NumericAxis(wasmContext, {growBy: new NumberRange(0, 0.1)}));

    const xValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const yValues = [1, 2, 4, 8, 11, 15, 24, 13, 11, 6, 17, 21, 3, 9, 15, 18, 25, 14, 4, 1];

    // Create an add a column series
    sciChartSurface.renderableSeries.add(new FastColumnRenderableSeries(wasmContext, {
        dataSeries: new XyDataSeries(wasmContext, {xValues, yValues}),
        // Fill & stroke support Hex strings and rgba()
        fill: appTheme.PaleSkyBlue + "77",
        stroke: appTheme.PaleSkyBlue,
        strokeThickness: 3,
        dataPointWidth: 0.7,
        cornerRadius: 10,
        // Optional datalabels on series. To enable set a style and position
        dataLabels: {
            horizontalTextPosition: EHorizontalTextPosition.Center,
            verticalTextPosition: EVerticalTextPosition.Top,
            style: { fontFamily: "Arial", fontSize: 16, padding: new Thickness(0,0,20,0) },
            color: appTheme.ForegroundColor,
        },
        // Optional series animation executed when series shows
        animation: new WaveAnimation({duration: 1000}),
    }));

    // Optional: Add some interactivity modifiers
    sciChartSurface.chartModifiers.add(new ZoomPanModifier());
    sciChartSurface.chartModifiers.add(new ZoomExtentsModifier());
    sciChartSurface.chartModifiers.add(new MouseWheelZoomModifier());

    sciChartSurface.zoomExtents();

    return {sciChartSurface, wasmContext};
};

// React component needed as our examples app is react.
// SciChart can be used in Angular, Vue, Blazor and vanilla JS! See our Github repo for more info
export default function DataLabelsExample() {
    const [sciChartSurface, setSciChartSurface] = React.useState<SciChartSurface>();
    React.useEffect(() => {
        (async () => {
            const res = await drawExample();
            setSciChartSurface(res.sciChartSurface);
        })();
        // Delete sciChartSurface on unmount component to prevent memory leak
        return () => sciChartSurface?.delete();
    }, []);

    return <div id={divElementId} className={classes.ChartWrapper}/>;
}
`;