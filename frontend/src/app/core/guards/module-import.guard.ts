/**
 * Module Import Guard
 *
 * @name throwIfAlreadyLoaded
 * @param {unknown} parentModule Parent module.
 * @param {string} moduleName Module name.
 *
 * @returns {void}
 */
export function throwIfAlreadyLoaded(
  parentModule: unknown,
  moduleName: string
): void {
  if (parentModule) {
    throw new Error(
      `${moduleName} is implementing a "load once" policy, this module is already loaded`
    );
  }
}
