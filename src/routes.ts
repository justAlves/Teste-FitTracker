/* eslint-disable import/no-unresolved */
import Settings from "./components/pages/SettingsPage/Settings.svelte";
import WaterGoal from "./components/pages/WaterGoal/WaterGoal.svelte";
import WalkGoal from "./components/pages/WalkGoal/WalkGoal.svelte";
import NotFound from "./components/pages/NotFound/NotFound.svelte";

export default {
  "/": WaterGoal,
  "/walk": WalkGoal,
  "/settings": Settings,
  "*": NotFound,
};

export interface IRouteLoadingDetail {
  /* The route that was matched, as in the route definition object */
  route: string,

  /*
    The current path, equivalent to the value of the $location readable store.

    Note: this is different from the route property as the former is the route
    definition, while this is the actual path the user requested
  */
  location: string,

  /*
    The "querystring" from the page's hash, equivalent to the value of the
    $querystring readable store
  */
  querystring: string,

  /* Params matched from the route (such as :id from the route) */
  params: unknown,

  /* User data passed with the wrap function; can be any kind of object/dictionary */
  userData: unknown
}
