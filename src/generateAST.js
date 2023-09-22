import _ from 'lodash';

export default (data) => {
  const iter = (node) => {
    const keys = _.sortBy(Object.keys(node));
    return keys.map((key) => {
      let value = node[key];
      if (typeof value === 'object' && value !== null) {
        console.log({
          name: key,
          type: 'node',
          value: iter(value),
          children: keys,
        });
        return { name: key, type: 'node', value: iter(value), children: keys };
      }
      return { name: key, type: 'leaf', value };
    });
  };

  return { name: 'root', type: 'node', value: iter(data) };
};
