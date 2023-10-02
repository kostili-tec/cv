const splitString = (string: string) => {
  const modStr = string.split('\n').map((str) => `* ${str}`);
  modStr.splice(0, 0, '/**');
  modStr.splice(modStr.length, 0, '**/');
  return modStr;
};

export default splitString;
