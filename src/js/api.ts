interface Child {
  value: string;
}
interface Parent {
  child: Child;
}
type keysParent = keyof Parent;
type keysChild = keyof Child;

type mix = keysParent | keysChild;

type typeFn = {
  path: Parent;
  prop: (key: mix) => typeFn | undefined;
};

function type(): typeFn {
  let path = {
    child: {
      value: 'initial string',
    },
  };

  return {
    path,
    prop(key) {
      try {
        if (!Object.keys(path).includes(key))
          throw new Error(`The item named "${key}" does not exist`);

        path = path[key];
        this.path = path;
        return this;
      } catch (error) {
        console.error(error);
      }
    },
  };
}

console.log(type().prop('child')?.prop('value')?.path);
