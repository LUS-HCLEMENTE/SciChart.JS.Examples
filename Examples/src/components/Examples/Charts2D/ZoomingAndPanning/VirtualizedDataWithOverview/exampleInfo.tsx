import { TExampleInfo } from "../../../../AppRouter/examplePages";
import { code } from "./GENERATED_SRC";
import { githubUrl } from "./GENERATED_GITHUB_URL";
import * as React from "react";
import { ExampleStrings } from "../../../ExampleStrings";
import { TDocumentationLink } from "../../../../../helpers/types/ExampleDescriptionTypes";
import exampleImage from "./virtualized-data-javascript-chart.jpg";

const previewDescription = `This examples shows how to load data on zoom/pan and how to create an overview chart for this case.`;
const description = `.`;
const tips = [""];

const documentationLinks: TDocumentationLink[] = [
    {
        href: ExampleStrings.urlDocumentationHome,
        title: ExampleStrings.titleDocumentationHome,
        linkTitle: "SciChart.js Documentation Home"
    },
    {
        href: ExampleStrings.urlTutorialsHome,
        title: ExampleStrings.titleTutorialsHome,
        linkTitle: "SciChart.js Tutorials"
    }
];

const Subtitle = () => (
    <p>
        Whenever the visible range changes, the chart requests data from the server, which returns a reduced view of the dataset, 
        in this case using a very simple `take every nth point` method.  The overview is created manually because it does not share data with the main chart
         but has a reduced view of the entire dataset. 
    </p>
);

export const virtualizedDataOverviewExampleInfo: TExampleInfo = {
    title: ExampleStrings.titleVirtualizedData,
    pageTitle: ExampleStrings.titleVirtualizedData + ExampleStrings.exampleGenericTitleSuffix,
    path: ExampleStrings.urlVirtualizedData,
    subtitle: Subtitle,
    documentationLinks,
    tips,
    description,
    previewDescription,
    code,
    githubUrl,
    metaDescription:
        "shows how to load data on zoom/pan and how to create an overview chart for this case.",
    metaKeywords: "zoom, pan, virtualize, server, overview, javascript, webgl, canvas",
    thumbnailImage: exampleImage
};
