import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";
export default [
    index("routes/home.tsx"),
    route("about", "./pages/about-page.tsx"),
    route("contact", "./pages/contact-page.tsx"),
] satisfies RouteConfig;
