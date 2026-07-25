import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiPrisma,
  SiVite,
  SiCplusplus,
  SiC,
  SiPhp,
  SiBootstrap,
  SiAngular,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiLinux,
  SiNginx,
  SiJenkins,
  SiGithubactions,
} from "react-icons/si";

const skillIcons = {
  react: FaReact,
  "react js": FaReact,

  node: FaNodeJs,
  "node.js": FaNodeJs,
  nodejs: FaNodeJs,

  javascript: SiJavascript,
  js: SiJavascript,

  typescript: SiTypescript,
  ts: SiTypescript,

  express: SiExpress,
  expressjs: SiExpress,

  mongodb: SiMongodb,
  mongo: SiMongodb,

  mysql: SiMysql,

  postgresql: SiPostgresql,

  redux: SiRedux,

  next: SiNextdotjs,
  nextjs: SiNextdotjs,

  html: FaHtml5,
  html5: FaHtml5,

  css: FaCss3Alt,
  css3: FaCss3Alt,

  tailwind: SiTailwindcss,

  bootstrap: SiBootstrap,

  firebase: SiFirebase,

  java: FaJava,

  python: FaPython,

  php: SiPhp,

  c: SiC,

  "c++": SiCplusplus,

  aws: FaAws,

  docker: FaDocker,

  figma: FaFigma,

  vite: SiVite,

  git: FaGitAlt,

  github: FaGithub,

  linux: SiLinux,

  angular: SiAngular,

  flutter: SiFlutter,

  kotlin: SiKotlin,

  swift: SiSwift,

  nginx: SiNginx,

  jenkins: SiJenkins,

  "github actions": SiGithubactions,

  prisma: SiPrisma,
};

export const getSkillIcon = (skill) => {
  const key = skill.trim().toLowerCase();

  return skillIcons[key] || null;
};