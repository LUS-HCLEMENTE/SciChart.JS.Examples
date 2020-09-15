import * as React from "react";
import { TExampleInfo } from "../../../../AppRouter/examples";
import { code } from "./GENERATED_SRC";
import { githubUrl } from "./GENERATED_GITHUB_URL";

const Description = () => <div>Heatmap chart description</div>;

export const heatmapChartExampleInfo: TExampleInfo = {
    title: "Heatmap Chart",
    path: "/chart2D_basicCharts_HeatmapChart",
    subtitle: "Heatmap Chart subtitle",
    description: Description,
    code,
    githubUrl
};