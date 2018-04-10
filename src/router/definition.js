const StateType = {
  catalogue: 0,
};

const stateData = {};
stateData[StateType.LOGIN] = {
  path: '/catalogue',
//  params: ['test'], // params can be null
//  defaultValues: { test: 'test' },  // defaultValues can be null
};


const getLinkDef = type => {
  const data = stateData[type];
  const params = ['state', ...(data.params || [])];
  let link = data.path;
  params.forEach(p => { link += `/:${p}`; });
  return link;
};

const getNavLink = (type, params) => {
  const finalParams = { state: type, ...params };
  const data = stateData[type];
  const defParams = ['state', ...(data.params || [])];
  let link = data.path;
  defParams.forEach(p => {
    const value = finalParams[p] != null ? finalParams[p] : (data.defaultValues && data.defaultValues[p]);
    link += `/${value || 0}`;
  });
  return link;
};


export { StateType, stateData, getLinkDef, getNavLink };
