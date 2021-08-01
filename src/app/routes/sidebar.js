import Sidebar from "../components/SidebarView.vue";
import Dashboard from "../components/views/settings/Dashboard.vue";
import User from "../components/views/settings/User.vue";
import Tournament from "../components/views/settings/Tournament.vue";
import Team from "../components/views/settings/Team.vue";

// import Dashboard from "@/pages/Dashboard.vue";
// import UserProfile from "@/pages/UserProfile.vue";
// import TableList from "@/pages/TableList.vue";
// import Typography from "@/pages/Typography.vue";
// import Icons from "@/pages/Icons.vue";
// import Maps from "@/pages/Maps.vue";
// import Notifications from "@/pages/Notifications.vue";
// import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: Sidebar,
    redirect: "/dashboard",
    children: [
    	{
			path: "dashboard",
			name: "Dashboard",
			component: Dashboard
      	},
      	{
			path: "user",
			name: "User Profile",
			component: User
      	},
      	{
			path: "tournament",
			name: "Tournament",
			component: Tournament
      	},
      	{
			path: "Team",
			name: "Team",
			component: Team
      	},
      // {
      //   path: "icons",
      //   name: "Icons",
      //   component: Icons
      // },
      // {
      //   path: "maps",
      //   name: "Maps",
      //   meta: {
      //     hideFooter: true
      //   },
      //   component: Maps
      // },
      // {
      //   path: "notifications",
      //   name: "Notifications",
      //   component: Notifications
      // },
      // {
      //   path: "upgrade",
      //   name: "Upgrade to PRO",
      //   component: UpgradeToPRO
      // }
    ]
  }
];

export default routes;
