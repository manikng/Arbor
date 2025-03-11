import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route('auth/signup','./../shared/components/auth/Signup.tsx'),
] satisfies RouteConfig;

