import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about-page.tsx"),
    route("contact", "routes/contact-page.tsx"),
] satisfies RouteConfig;
