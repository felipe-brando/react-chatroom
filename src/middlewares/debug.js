const debugMiddleware = (store) => (next) => (action) => {
  console.log('Debug :', action);
  next(action); 
};

export default debugMiddleware;
