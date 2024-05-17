import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      topPosition: 68,
      title: 'CBE CAT PT',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['SQL', 'PL/SQL'],
      myRole: 'Developer',
      description: 'Design, develop, and maintain SQL databases, tables, views, stored procedures, and functions.Write efficient SQL queries to extract, manipulate, and analyze data, ensuring optimal performance of database operationsDevelop, debug, and optimize PL/SQL code for implementing business logic, data validation, and data manipulation tasks.Implement database security measures, including access controls, encryption, and data masking, to protect sensitive information.'
    },
    {
      topPosition: 0,
      title: 'Viacom MSO Steady State',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['New Rellic', 'ITIL', 'Orion', 'Jira', 'GCP Buckets', 'Status Page', 'Fire Hydrant'],
      myRole: 'Major Incident Management',
      description: 'Application Support at L2 and L3 fixing technical issues by the business users as well as IT Operations.Responsible for application-related interface monitoring the process flows.Responsible for L2/L3 support on application issues, and on servicing standard issues from Users.Monitors various sources, such as Monitoring tools, Users reports, and System alerts, to detect and identify incidents promptly and assesses the impact priorities, and service level agreements (SLAs).Facilitates the escalation of incidents to the appropriate support group or technical teams as per defined escalation procedures and ensures proper communication and collaboration among teams involved in incident resolutions,including providing necessary updates to stakeholders.Coordinates and tracks the resolution process to ensure timely and effective incident resolutions and provides guidance and support to the teams, ensuring adherence to incident management processes and best practices.Utilizes incident management tools and technologies effectively to streamline incident handling, tracking, and reporting.Responding to a reported service incident, identifying the cause, and initiating the incident management process.'
    }
    // {
    //   topPosition: 136,
    //   title: 'AI Powered Real Estate',
    //   badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
    //   tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //   myRole: 'Full Stack Developer',
    //   description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.'
    // },
    // {
    //   topPosition: 204,
    //   title: 'Newsroom Management',
    //   badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
    //   tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', 'Calendar'],
    //   myRole: 'Full Stack Developer',
    //   description: 'My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the applications state and React- hook - form and Sun Editor to handle forms.'
    // },
  ];
}
