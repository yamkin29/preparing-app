import React from "react";

export interface Topic {
    id: string;
    label: string;
    content: React.FC;
}

export interface Section {
    id: string;
    title: string;
    topics: Topic[];
}