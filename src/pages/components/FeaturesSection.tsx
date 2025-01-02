import {
  ArrowPathIcon,
  //CloudArrowUpIcon,
  CogIcon,
  ArrowDownTrayIcon,
  //ServerIcon,
  ClockIcon,
  CameraIcon,
  PresentationChartLineIcon,
  MapIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const features = [
  {
    name: "State SnapShot Display",
    description:
      "See your application state in an interactive format for clear and concise state management, all recorded state changes are saved in snapshots.",
    icon: CameraIcon,
  },
  {
    name: "Time Travel Rendering",
    description:
      "Rewind to previous state changes by jumping to a specific snapshot, using the time travel slider, or playing through a series of snapshots with the play button.",
    icon: ClockIcon,
  },
  {
    name: "Context Data Display",
    description:
      "Visualize the relationships of context providers and consumers, along with live context theme data, properties and values.",
    icon: EyeIcon,
  },
  {
    name: "Prop Visualization",
    description:
      "View the component map and track component relationships, as well as the flow of properties down the component tree.",
    icon: CogIcon,
  },
  {
    name: "Accessibility Debugging",
    description:
      "Prioritize accessibility by analyzing how a screen reader interprets your application per state change.",
    icon: EyeIcon,
  },
  {
    name: "Components Performance Display",
    description:
      "Analyze the latency trends for component render times, organized per component, per state change.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "State History Diffing",
    description:
      "Compare snapshots in order to pinpoint the exact difference in property values per state change.",
    icon: ArrowPathIcon,
  },
  {
    name: "Download / Upload State History",
    description:
      "Download or upload a JSON source file of your application's state history to resume or share your working session.",
    icon: ArrowDownTrayIcon,
  },
  {
    name: "Atom and Selector Relationships",
    description:
      "Visualize the detailed mapping of Atoms and Selectors to their associated components in Recoil applications.",
    icon: MapIcon,
  },
];

export default function FeaturesSection() {
  return (
    <div className="lg:py-18 sm:py-18 relative bg-white py-24">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-rose-500">Core Features</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What is Reactime?
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Reactime is an open-source Chrome extension with a comprehensive suite
          of tools designed to elevate the debugging process. From its intuitive
          component map and time-travel snapshots to its accessibility tree,
          dynamic visualizations of web metrics, rendering statistics, and
          comprehensive diffing history, Reactime provides an all-in-one
          solution for optimizing complex React applications.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root h-64 rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-rose-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
