import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
const data = [
  {
    id: 1,
    logo: FaLock,
    title: "Login",
    desc: "To get started, you'll need to log in or register an account. This is the first step to access all features and personalize your experience.",
  },

  {
    id: 2,
    logo: FaUser,
    title: "Profile",
    desc: "After logging in, navigate to the Profile section and add your coding profiles. This allows us to fetch and display your coding data, which is essential for tracking your progress.",
  },

  {
    id: 3,
    logo: MdAnalytics,
    title: "Analyze",
    desc: "Once your profiles are added, go to the Analyze section. Here, you can review detailed insights and track your coding performance over time.",
  },
  {
    id: 4,
    logo: FaCalendarDays,
    title: "Analyze",
    desc: "To stay updated with upcoming coding contests, visit the Contests page. This section provides information about upcoming events so you can plan and prepare for them effectively.",
  },
];

export default data;
