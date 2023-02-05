import React, { useReducer, createContext } from 'react';

const globalState = {
    groups: {
      0: {
        plans: [
          {id: 0, since: "2022-10-18T08:30:00", till: "2022-10-18T10:15:00", title: "example plan 1", description: "this is a test plan", 
          channelUuid: "Sat Feb 04 2023", votes: 5},
          {id: 1, since: "2022-10-18T10:25:00", till: "2022-10-18T12:25:00", title: "example plan 2", description: "this is a test plan", 
          channelUuid: "Sat Feb 04 2023", votes: 5},
          {id: 2, since: "2022-10-18T13:00:00", till: "2022-10-18T14:30:00", title: "example plan 3", description: "this is a test plan", 
          channelUuid: "Sat Feb 04 2023", votes: 5},
          // {id: 3, since: "2022-10-18T13:00:00", till: "2022-10-18T14:30:00", title: "example plan 3", description: "this is a test plan", 
          // channelUuid: "Sun Feb 05 2023", votes: 5},
        ]
      }
    },

    // groups: {
    //     <group_id>: {
    //         plans: [{id, start, end, name, description, video, votes, etc}],
    //         availability: [{day, start, end}],
    //         members: [{id, etc}]
    //     }
    // }

    currentGroup: 0, // id of current group
};

// create a context tracking user authorization
const StateContext = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'path.push': {
      let subpaths = state.subpaths;
      subpaths.push(action.path);
      let path = subpaths.join('/');
      return { ...state, path, subpaths };
    }
    case 'path.pop': {
      let subpaths = state.subpaths;
      subpaths.pop();
      let path = subpaths.join('/');
      return { ...state, path, subpaths };
    }
    case 'path.set': {
      let subpaths = action.path.split('/');
      let path = action.path;
      return { ...state, path, subpaths };
    }
    case 'auth.set': {
      return {...state, isAuthorized: action.isAuthorized }
    }
    default:
      throw new Error();
  }
}

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  return(
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };