import React from "react";
import items from "@/data/items";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return items.map((project) => ({
    id: project.id.toString(),
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = items.find((item) => item.id === Number(id));

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
