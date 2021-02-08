import * as React from "react";
import {TExampleInfo} from "../../../../AppRouter/examplePages";
import {code} from "./GENERATED_SRC";
import {githubUrl} from "./GENERATED_GITHUB_URL";
import {ExampleStrings} from "../../../ExampleStrings";

const Description = () => (<div>
    <p>Demonstrates how to create a JavaScript Digital Mountain Chart. An area or polygon is rendered from the Y-value to the
        zeroLineY, a configurable
        property which defaults to zero.</p>
    <h4>Tips!</h4>
    <p>By setting the stroke property you alter the line color, and fill alters the fill. The Mountain-series also
        supports semi-transparent and linear gradient brush fills and looks great!.</p>
    <h4>Documentation Links</h4>
    <ul>
        <li><a href={ExampleStrings.urlDocumentationHome} title={ExampleStrings.titleDocumentationHome} target="_blank">
            SciChart.js Documentation Home</a></li>
        <li><a href={ExampleStrings.urlTutorialsHome} title={ExampleStrings.titleTutorialsHome} target="_blank">
            SciChart.js Tutorials</a></li>
        <li><a href={ExampleStrings.urlDigitalMountainChartDocumentation} target="_blank"
               title={ExampleStrings.urlTitleDigitalMountainChartDocumentation}>JavaScript Digital Mountain Chart Documentation</a>
        </li>
        <li><a href={ExampleStrings.urlRenderSeriesPropertiesDocumentation}
               title={ExampleStrings.urlTitleRenderSeriesProperties} target="_blank">
            Common RenderableSeries Properties</a></li>
    </ul>
    <h4>See Also</h4>
    <ul>
        <li><a href={ExampleStrings.urlStackedMountainChart}
               title={ExampleStrings.urlTitleStackedMountainChart}>The JavaScript Stacked Mountain Chart Example</a>
        </li>
    </ul>
</div>);
const Subtitle = () => (<p>Demonstrates how to create a <strong>JavaScript Digital Mountain Chart</strong>{' '}
    using SciChart.js, High Performance{' '}
    <a href={ExampleStrings.urlJavascriptChartFeatures} target="_blank">JavaScript Charts</a></p>);

export const digitalMountainChartExampleInfo: TExampleInfo = {
    title: ExampleStrings.titleDigitalMountainChart,
    path: ExampleStrings.urlDigitalMountainChart,
    subtitle: Subtitle,
    description: Description,
    code,
    githubUrl,
    seoDescription: "Demonstrates how to create a JavaScript Digital Mountain Chart. An area or polygon is rendered with a gradient fill to configurable zero-line.",
    seoKeywords: "digital, mountain, chart, javascript, webgl, canvas",
    thumbnailImage: "javascript-digital-mountain-chart.jpg"
};