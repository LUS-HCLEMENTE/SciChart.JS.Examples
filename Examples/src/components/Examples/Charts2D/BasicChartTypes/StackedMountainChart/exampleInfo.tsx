import * as React from "react";
import { TExampleInfo } from "../../../../AppRouter/examples";
import { code } from "./GENERATED_SRC";
import { githubUrl } from "./GENERATED_GITHUB_URL";
import {ExampleStrings} from "../../../ExampleStrings";

const Description = () => <div>Stacked mountain chart description</div>;
const Subtitle = () => (<p>Demonstrates how create a <strong>JavaScript Stacked Mountain Chart</strong>{' '}
    using SciChart.js, High Performance{' '}
    <a href="https://www.scichart.com/javascript-chart-features" target="_blank">JavaScript Charts</a></p>);

export const stackedMountainChartExampleInfo: TExampleInfo = {
    title: ExampleStrings.titleStackedMountainChart,
    path: ExampleStrings.urlStackedMountainChart,
    subtitle: Subtitle,
    description: Description,
    code,
    githubUrl,
};
