import React from 'react';
import ReactDom from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDom.render(
	<SpeechProvider appId="059ce76d-e20f-4a03-88b1-db8062f513d0" language="en-US">
		<Provider>
			<App />
		</Provider>
		,
	</SpeechProvider>,
	document.getElementById('root')
);
