import { useLocation, Link as RouterLink } from "react-router-dom";
import { Link } from "wasp/client/router";

export function titleCase(name: string) {
  return name
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * An individual crumb component
 */
const Crumbs = (pathnames: string[]) =>
  pathnames.map((pathname, index) => {
    const last = index === pathnames.length - 1;
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    return last ? (
      <>
        {pathname === "login" || pathname === "signup" ? (
          <></>
        ) : (
          <>
            <div>{">"}</div>
            <li>{titleCase(decodeURI(pathname))}</li>
          </>
        )}
      </>
    ) : (
      <>
        <div>{">"}</div>
        <li>
          <RouterLink to={to}>{titleCase(decodeURI(pathname))}</RouterLink>
        </li>
      </>
    );
  });

/**
 * The Breadcrumbs component. This will display the current page name and a breadcrumb trail.
 */
export const Breadcrumbs = () => {
  const pathnames = useLocation()
    .pathname.split("/")
    .filter((x) => {
      if (Number.isNaN(parseInt(x))) {
        return x;
      }
    });

  const pageName =
    pathnames.length === 0 ? "Home" : pathnames[pathnames.length - 1];

  return (
    <div className='px-2 pb-1'>
      <div className='text-md breadcrumbs'>
        <ul className='flex flex-row space-x-3'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {Crumbs(pathnames)}
        </ul>
      </div>
    </div>
  );
};
