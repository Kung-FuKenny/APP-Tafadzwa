import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";

export const FeatureList = [
  {
    id: 1,
    icon: <FaAccessibleIcon color="#4b4586" size={22} />,
    heading: "Business Process Mapping",
    text: "A business process illustration is produced. The first step in gaining control over an organization is to know and understand the basic processes."
  },
  {
    id: 2,
    icon: <SiDatabricks color="#4b4586" size={22} />,
    heading: "Job Evaluation and Grading",
    text: "Job evaluation is performed to generate pay structure for a specific job to prevent pay discrimination inside the organization based on workforce expectations.",
  },
  {
    id: 3,
    icon: <MdConnectWithoutContact color="#4b4586" size={22} />,
    heading: "Employee Relations Consulting",
    text: "We provide the best business partner and services to our client in all aspects related to labour relations. Building long-term relationships by providing efficient and effective services. ",
  },
  {
    id: 4,
    icon: <FaGg color="#4b4586" size={22} />,
    heading: "Organisational Development",
    text: "We see Organisational Development (OD) as the practice of changing people (human capital) and organizations for positive growth. It is also a planned process of developing an organization to be more effective in accomplishing its desired goals.",
  },
];
