import * as React from "react";
import { TExampleInfo } from "../../../../AppRouter/examples";
import { code } from "./GENERATED_SRC";
import { githubUrl } from "./GENERATED_GITHUB_URL";

const Description = () => <div>Annotations are easy description</div>;

export const annotationsAreEasyExampleInfo: TExampleInfo = {
    title: "Annotations are Easy",
    path: "/chart2D_chartAnnotations_AnnotationsAreEasy",
    subtitle: "Annotations are Easy subtitle",
    description: Description,
    code,
    githubUrl,
};