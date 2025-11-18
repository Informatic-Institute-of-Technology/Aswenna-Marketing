import { forwardRef } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = forwardRef(({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
        <RouterNavLink
            ref={ref}
            to={to}
            className={({ isActive, isPending }) => {
                const classes = [className];
                if (isActive && activeClassName) classes.push(activeClassName);
                if (isPending && pendingClassName) classes.push(pendingClassName);
                return classes.filter(Boolean).join(' ');
            }}
            {...props}
        />
    );
});

NavLink.displayName = "NavLink";

export { NavLink };
