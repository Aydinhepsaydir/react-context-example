/*
 *
 * AppProvider to be imported at application root
 *
 * withState to be used anywhere in application that requires global state
 *
 */

import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [number, setNumber] = useState(10);

	return (
		<AppContext.Provider value={{ number, setNumber }}>
			{children}
		</AppContext.Provider>
	);
};

//create HOC to remove need for AppContext.Consumer with individual components
const withState = (Component) => {
	return (props) => {
		return (
			<AppContext.Consumer>
				{(state) => <Component context={state} {...props} />}
			</AppContext.Consumer>
		);
	};
};

export default AppProvider;

export { withState };
