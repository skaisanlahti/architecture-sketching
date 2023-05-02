// eslint-disable-next-line
export function getMethodNamesWithPrefix(object: any, prefix: string) {
  return Object.getOwnPropertyNames(Object.getPrototypeOf(object)).reduce(
    (methodNames: string[], propertyName) => {
      if (
        typeof object[propertyName] === "function" &&
        propertyName !== "constructor" &&
        propertyName.startsWith(prefix)
      ) {
        methodNames.push(propertyName);
      }
      return methodNames;
    },
    []
  );
}
